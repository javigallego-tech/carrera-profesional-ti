# Perfil mínimo por nivel

Radar del perfil mínimo esperado en cada nivel profesional, con las seis dimensiones en una escala del 1 al 6. Los valores proceden de la tabla [Requisitos por nivel](README.md#requisitos-por-nivel).

Sirven para comparar el perfil de una persona con el nivel al que aspira. Los niveles **Tech Lead / Manager** y **Principal / Director** comparten grupo en la tabla, por lo que se muestran juntos.

> Los diagramas usan [Mermaid](https://mermaid.js.org/syntax/radar.html). Si tu visor no los renderiza, comprueba que admite el tipo `radar-beta`.

## I – Junior 1

```mermaid
---
title: "I – Junior 1"
---
radar-beta
  axis t["Técnica"], a["Autonomía"], r["Responsabilidad"], l["Liderazgo"], c["Comunicación"], e["Empresa"]
  curve n["Mínimo"]{1, 1, 1, 1, 1, 1}
  max 6
  min 0
  ticks 6
  graticule polygon
  showLegend false
```

## H – Junior 2

```mermaid
---
title: "H – Junior 2"
---
radar-beta
  axis t["Técnica"], a["Autonomía"], r["Responsabilidad"], l["Liderazgo"], c["Comunicación"], e["Empresa"]
  curve n["Mínimo"]{2, 2, 2, 1, 1, 2}
  max 6
  min 0
  ticks 6
  graticule polygon
  showLegend false
```

## G – Mid 1

```mermaid
---
title: "G – Mid 1"
---
radar-beta
  axis t["Técnica"], a["Autonomía"], r["Responsabilidad"], l["Liderazgo"], c["Comunicación"], e["Empresa"]
  curve n["Mínimo"]{3, 3, 3, 2, 3, 3}
  max 6
  min 0
  ticks 6
  graticule polygon
  showLegend false
```

## F – Mid 2

```mermaid
---
title: "F – Mid 2"
---
radar-beta
  axis t["Técnica"], a["Autonomía"], r["Responsabilidad"], l["Liderazgo"], c["Comunicación"], e["Empresa"]
  curve n["Mínimo"]{3, 3, 4, 2, 3, 4}
  max 6
  min 0
  ticks 6
  graticule polygon
  showLegend false
```

## E – Senior 1

```mermaid
---
title: "E – Senior 1"
---
radar-beta
  axis t["Técnica"], a["Autonomía"], r["Responsabilidad"], l["Liderazgo"], c["Comunicación"], e["Empresa"]
  curve n["Mínimo"]{4, 4, 6, 3, 4, 5}
  max 6
  min 0
  ticks 6
  graticule polygon
  showLegend false
```

## D – Senior 2

```mermaid
---
title: "D – Senior 2"
---
radar-beta
  axis t["Técnica"], a["Autonomía"], r["Responsabilidad"], l["Liderazgo"], c["Comunicación"], e["Empresa"]
  curve n["Mínimo"]{5, 5, 6, 3, 4, 6}
  max 6
  min 0
  ticks 6
  graticule polygon
  showLegend false
```

## C – Tech Lead / Manager

```mermaid
---
title: "C – Tech Lead / Manager"
---
radar-beta
  axis t["Técnica"], a["Autonomía"], r["Responsabilidad"], l["Liderazgo"], c["Comunicación"], e["Empresa"]
  curve n["Mínimo"]{6, 6, 6, 4, 5, 6}
  max 6
  min 0
  ticks 6
  graticule polygon
  showLegend false
```

## B – Principal / Director

```mermaid
---
title: "B – Principal / Director"
---
radar-beta
  axis t["Técnica"], a["Autonomía"], r["Responsabilidad"], l["Liderazgo"], c["Comunicación"], e["Empresa"]
  curve n["Mínimo"]{5, 6, 6, 5, 5, 6}
  max 6
  min 0
  ticks 6
  graticule polygon
  showLegend false
```

## A – Jefe/a de Departamento

```mermaid
---
title: "A – Jefe/a de Departamento"
---
radar-beta
  axis t["Técnica"], a["Autonomía"], r["Responsabilidad"], l["Liderazgo"], c["Comunicación"], e["Empresa"]
  curve n["Mínimo"]{5, 6, 6, 6, 6, 6}
  max 6
  min 0
  ticks 6
  graticule polygon
  showLegend false
```

## Cómo usarlos

Para comparar a una persona con un nivel, añade una segunda curva con su valoración en cada dimensión. Hay un ejemplo en [Cómo usar este modelo](README.md#cómo-usar-este-modelo).
