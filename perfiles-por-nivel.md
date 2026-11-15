# Perfil mínimo por nivel

Radar del perfil mínimo esperado en cada nivel profesional, con las seis dimensiones en una escala del 1 al 6. Los valores proceden de la tabla [Requisitos por nivel](README.md#requisitos-por-nivel).

Sirven para comparar el perfil de una persona con el nivel al que aspira. Los niveles **Tech Lead / Manager** y **Principal / Director** comparten grupo en la tabla, por lo que se muestran juntos.

> Los diagramas usan [Mermaid](https://mermaid.js.org/syntax/radar.html). Si tu visor no los renderiza, comprueba que admite el tipo `radar-beta`.

## I – Junior 1

```mermaid
---
config:
  themeVariables:
    cScale0: "#89BE34"
---
radar-beta
  axis t["Técnica"], a["Autonomía"], r["Responsabilidad"], l["Liderazgo"], c["Comunicación"], e["Empresa"]
  curve n["Mínimo"]{1, 1, 1, 1, 1, 1}
  max 6
  ticks 6
  graticule polygon
  showLegend false
```

## H – Junior 2

```mermaid
---
config:
  themeVariables:
    cScale0: "#89BE34"
---
radar-beta
  axis t["Técnica"], a["Autonomía"], r["Responsabilidad"], l["Liderazgo"], c["Comunicación"], e["Empresa"]
  curve n["Mínimo"]{2, 2, 2, 1, 1, 2}
  max 6
  ticks 6
  graticule polygon
  showLegend false
```

## G – Mid 1

```mermaid
---
config:
  themeVariables:
    cScale0: "#89BE34"
---
radar-beta
  axis t["Técnica"], a["Autonomía"], r["Responsabilidad"], l["Liderazgo"], c["Comunicación"], e["Empresa"]
  curve n["Mínimo"]{3, 3, 3, 2, 3, 3}
  max 6
  ticks 6
  graticule polygon
  showLegend false
```

## F – Mid 2

```mermaid
---
config:
  themeVariables:
    cScale0: "#89BE34"
---
radar-beta
  axis t["Técnica"], a["Autonomía"], r["Responsabilidad"], l["Liderazgo"], c["Comunicación"], e["Empresa"]
  curve n["Mínimo"]{3, 3, 4, 2, 3, 4}
  max 6
  ticks 6
  graticule polygon
  showLegend false
```

## E – Senior 1

```mermaid
---
config:
  themeVariables:
    cScale0: "#89BE34"
---
radar-beta
  axis t["Técnica"], a["Autonomía"], r["Responsabilidad"], l["Liderazgo"], c["Comunicación"], e["Empresa"]
  curve n["Mínimo"]{4, 4, 6, 3, 4, 5}
  max 6
  ticks 6
  graticule polygon
  showLegend false
```

## D – Senior 2

```mermaid
---
config:
  themeVariables:
    cScale0: "#89BE34"
---
radar-beta
  axis t["Técnica"], a["Autonomía"], r["Responsabilidad"], l["Liderazgo"], c["Comunicación"], e["Empresa"]
  curve n["Mínimo"]{5, 5, 6, 3, 4, 6}
  max 6
  ticks 6
  graticule polygon
  showLegend false
```

## C – Tech Lead / Manager

```mermaid
---
config:
  themeVariables:
    cScale0: "#89BE34"
---
radar-beta
  axis t["Técnica"], a["Autonomía"], r["Responsabilidad"], l["Liderazgo"], c["Comunicación"], e["Empresa"]
  curve n["Mínimo"]{6, 6, 6, 4, 5, 6}
  max 6
  ticks 6
  graticule polygon
  showLegend false
```

## B – Principal / Director

```mermaid
---
config:
  themeVariables:
    cScale0: "#89BE34"
---
radar-beta
  axis t["Técnica"], a["Autonomía"], r["Responsabilidad"], l["Liderazgo"], c["Comunicación"], e["Empresa"]
  curve n["Mínimo"]{5, 6, 6, 5, 5, 6}
  max 6
  ticks 6
  graticule polygon
  showLegend false
```

## A – Jefe/a de Departamento

```mermaid
---
config:
  themeVariables:
    cScale0: "#89BE34"
---
radar-beta
  axis t["Técnica"], a["Autonomía"], r["Responsabilidad"], l["Liderazgo"], c["Comunicación"], e["Empresa"]
  curve n["Mínimo"]{5, 6, 6, 6, 6, 6}
  max 6
  ticks 6
  graticule polygon
  showLegend false
```

## Cómo usarlos

Para comparar a una persona con un nivel, añade una segunda curva con su valoración en cada dimensión. Hay un ejemplo en [Cómo usar este modelo](README.md#cómo-usar-este-modelo).
