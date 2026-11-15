// Genera el comentario con el radar de una autoevaluación o de una valoración del responsable.
// Entrada: ISSUE_BODY (cuerpo del issue). Salida: Markdown por stdout (vacío si no procede).
// Los perfiles mínimos se leen de la tabla "Requisitos por nivel" del README.
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const MARCA = '<!-- radar-autoevaluacion -->';
const FENCE = '`'.repeat(3);
const DIMENSIONES = [
  { titulo: 'Excelencia técnica', eje: 'Técnica' },
  { titulo: 'Autonomía', eje: 'Autonomía' },
  { titulo: 'Responsabilidad', eje: 'Responsabilidad' },
  { titulo: 'Liderazgo', eje: 'Liderazgo' },
  { titulo: 'Comunicación y colaboración', eje: 'Comunicación' },
  { titulo: 'Conocimiento de la empresa', eje: 'Empresa' },
];

function secciones(cuerpo) {
  const resultado = {};
  for (const parte of cuerpo.replace(/\r/g, '').split(/^### /m).slice(1)) {
    const salto = parte.indexOf('\n');
    resultado[parte.slice(0, salto).trim()] = parte.slice(salto + 1).trim();
  }
  return resultado;
}

function valoraciones(cuerpo) {
  const sec = secciones(cuerpo);
  const valores = DIMENSIONES.map((d) => Number.parseInt(sec[d.titulo], 10));
  return valores.every((v) => v >= 1 && v <= 6) ? valores : null;
}

function perfilMinimo(cuerpo, readme) {
  const letra = secciones(cuerpo)['Nivel de referencia']?.trim()[0];
  if (!letra) return null;
  for (const linea of readme.split('\n')) {
    const celdas = linea.split('|').map((c) => c.trim());
    const valores = celdas.slice(2, 8).map(Number);
    if (celdas[1]?.startsWith(`${letra} –`) && valores.length === 6 && valores.every(Number.isInteger)) {
      return { nombre: celdas[1], valores };
    }
  }
  return null;
}

function cuerpoReferencia(cuerpo) {
  if (process.env.REF_BODY_FILE) return readFileSync(process.env.REF_BODY_FILE, 'utf8');
  const numero = secciones(cuerpo)['Autoevaluación de referencia']?.match(/\d+/)?.[0];
  if (!numero) return null;
  try {
    return execFileSync(
      'gh',
      ['api', `repos/${process.env.GITHUB_REPOSITORY}/issues/${numero}`, '--jq', '.body'],
      { encoding: 'utf8' },
    );
  } catch {
    return null;
  }
}

function radar(series) {
  const colores = ['#89BE34', '#EC8916', '#3b82f6'];
  const ejes = DIMENSIONES.map((d, i) => {
    const valores = series.map((s) => s.valores[i]);
    return `${'tarelc'[i]}["${d.eje} (${valores.join('/')})"]`;
  }).join(', ');
  const curvas = series.map((s, i) => `  curve s${i}["${s.nombre}"]{${s.valores.join(', ')}}`).join('\n');
  const escala = colores.slice(0, series.length).map((c, i) => `    cScale${i}: "${c}"`).join('\n');
  return [
    `${FENCE}mermaid`,
    '---',
    'config:',
    '  themeVariables:',
    escala,
    '---',
    'radar-beta',
    `  axis ${ejes}`,
    curvas,
    '  max 6',
    '  ticks 6',
    '  graticule polygon',
    FENCE,
  ].join('\n');
}

function diferencia(n) {
  return n > 0 ? `+${n}` : String(n);
}

function generar(cuerpo, readme) {
  const propios = valoraciones(cuerpo);
  if (!propios) return '';
  const minimo = perfilMinimo(cuerpo, readme);
  const esResponsable = secciones(cuerpo)['Autoevaluación de referencia'] !== undefined;
  const cuerpoAuto = esResponsable ? cuerpoReferencia(cuerpo) : null;
  const auto = cuerpoAuto ? valoraciones(cuerpoAuto) : null;

  const series = [];
  if (minimo) series.push({ nombre: `Mínimo ${minimo.nombre}`, valores: minimo.valores });
  if (esResponsable && auto) series.push({ nombre: 'Autoevaluación', valores: auto });
  series.push({ nombre: esResponsable ? 'Responsable' : 'Persona', valores: propios });

  const orden = series.map((s) => s.nombre.split(' ')[0]).join(' / ');
  const cabecera = esResponsable && auto
    ? '| Dimensión | Autoevaluación | Responsable | Diferencia |' + (minimo ? ' Mínimo |' : '')
    : '| Dimensión | Valoración |' + (minimo ? ' Mínimo | Diferencia |' : '');
  const separador = cabecera.replace(/[^|]/g, '-');
  const filas = DIMENSIONES.map((d, i) => {
    if (esResponsable && auto) {
      const dif = propios[i] - auto[i];
      return `| ${d.titulo} | ${auto[i]} | ${propios[i]} | ${dif === 0 ? '0' : `**${diferencia(dif)}**`} |` + (minimo ? ` ${minimo.valores[i]} |` : '');
    }
    const dif = minimo ? propios[i] - minimo.valores[i] : 0;
    return `| ${d.titulo} | ${propios[i]} |` + (minimo ? ` ${minimo.valores[i]} | ${dif < 0 ? `**${dif}**` : diferencia(dif)} |` : '');
  });

  const nota = esResponsable && auto
    ? 'Las diferencias de un nivel o más, en negrita, son el mejor punto de partida para la conversación.'
    : 'Las dimensiones con una diferencia negativa, en negrita, están por debajo del perfil mínimo del nivel de referencia.';

  return [
    MARCA,
    `## Radar ${esResponsable ? 'de la valoración del responsable' : 'de la autoevaluación'}`,
    '',
    radar(series),
    '',
    `Entre paréntesis, en cada eje: ${orden.toLowerCase()}.`,
    '',
    cabecera,
    separador,
    ...filas,
    '',
    nota,
    '',
  ].join('\n');
}

const readme = readFileSync(process.env.README_PATH ?? 'README.md', 'utf8');
process.stdout.write(generar(process.env.ISSUE_BODY ?? '', readme));
