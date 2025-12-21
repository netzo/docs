---
title: Productos, variantes y formatos
description: Cómo se estructuran las unidades reales del inventario.
navigation:
  icon: i-mdi-shape
seo:
  title: Productos, variantes y formatos | Estructura del inventario en Netzo ERP
  description: Aprende cómo Netzo maneja variantes y formatos para controlar inventario correctamente.
---

El inventario **siempre se controla por variante**, no por producto genérico.

---

## Variantes

Una variante representa:

- Presentación específica
- Peso
- Dimensión
- Empaque

Ejemplo:

- Bolsa 100 g
- Bolsa 200 g

Cada una tiene inventario independiente.

---

## Formatos

Los formatos agrupan variantes para venta u operación.

Ejemplos:

- Caja 6 piezas
- Caja 15 piezas
- Display

Internamente:

- El sistema convierte formatos a unidades base
- El inventario siempre se guarda en la unidad real

::note
Un formato no crea inventario nuevo.
Solo define cómo se consume o vende.
::
