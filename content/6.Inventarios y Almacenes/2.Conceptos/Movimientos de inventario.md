---
tableUid: inventorymovements
title: Movimientos de inventario
description: Los movimientos de inventario son la fuente de verdad (event-sourced) de cambios de stock. Cada movimiento registra un delta (aumentar/disminuir), el segmento objetivo (disponible/reservado/en espera) y el contexto exacto de almacén, y dispara la actualización de niveles de inventario para consultas rápidas.
navigation:
  icon: i-mdi-swap-horizontal
seo:
  title: Movimientos de inventario | Entradas, salidas y traspasos
  description: Aprende cómo se registran los movimientos físicos de inventario en Netzo.
---

Los **movimientos de inventario** son registros internos que documentan, con trazabilidad completa, **cada cambio de inventario** que ocurre por una operación real: recibir, enviar, transformar, trasladar, reservar, liberar, ajustar, etc.

Un movimiento **no es “una corrección manual”**: es la evidencia transaccional de *qué cambió*, *dónde cambió* y *por qué documento cambió*.
Con base en estos movimientos, el sistema actualiza automáticamente los **niveles de inventario** (el “saldo” actual).

---

## Qué resuelve

- **Trazabilidad**: puedes auditar cuándo y por qué cambió el inventario.
- **Consistencia**: todos los módulos actualizan inventario de la misma forma.
- **Niveles actualizados**: el sistema refleja el saldo actual sin recalcular todo el historial.

---

## Cómo se interpreta un movimiento

Cada movimiento indica:

- **Origen del movimiento**: el documento que lo generó (por ejemplo: *Entrada de mercancía, Salida de mercancía, Actividad de almacén, Orden de trabajo*, etc.).
- **Producto**: variante y formato (si aplica).
- **Trazabilidad**:
  - **Lote** (si el producto se controla por lote)
  - **Número de serie** (si el producto se controla por serie)
- **Ubicación**:
  - **Almacén**
  - **Zona** (si aplica)
  - **Ubicación** (si aplica)
- **Estado de inventario** (segmento): **Disponible**, **Reservado**, **Retenido**.
- **Operación**:
  - **Incremento** (entrada)
  - **Decremento** (salida)
- **Cantidad**: siempre es positiva; el efecto lo define la operación (incrementa o decrementa).

Además, por auditoría, el sistema guarda los saldos **antes y después** del movimiento (Disponible/Reservado/Retenido/En existencia) para ese mismo producto–ubicación–lote/serie.

---

## Tipos de movimiento (casos comunes)

### Entradas (compras, producción)
Se usan cuando el inventario **aumenta** físicamente.

Ejemplos:
- Recepción por compras (entrada de mercancía).
- Salida de producción / ensamble (orden de trabajo).

### Salidas (ventas, consumo)
Se usan cuando el inventario **disminuye** físicamente.

Ejemplos:
- Entrega al cliente (salida de mercancía).
- Consumo a producción (materia prima hacia orden de trabajo).

### Traspasos (entre almacenes, zonas o ubicaciones)
Un traspaso se registra como **dos movimientos**:
- **Decremento** en el origen.
- **Incremento** en el destino.

Esto mantiene trazabilidad completa (qué salió de dónde y qué entró a dónde).

---

## Reservas y retenciones (Disponible / Reservado / Retenido)

En Netzo, “reservar” o “retener” no es un checkbox: es un **movimiento de inventario entre segmentos**.

Ejemplos:

- **Reservar**: baja de **Disponible** y sube a **Reservado**.
- **Liberar reserva**: baja de **Reservado** y sube a **Disponible**.
- **Retener (calidad/investigación)**: mueve unidades a **Retenido** según el flujo operativo.

Esto permite ver:
- cuánto está disponible para surtir,
- cuánto ya está comprometido (reservado),
- y cuánto está bloqueado (retenido).

---

## Reglas y validaciones importantes

- No se registran movimientos con **cantidad cero**.
- Si el producto se controla por **lote**, el movimiento requiere **Lote**.
- Si el producto se controla por **serie**, el movimiento requiere **Número de serie**.

---

## Qué actualiza el sistema automáticamente

Al registrar un movimiento, el sistema actualiza los **niveles de inventario** para reflejar el saldo actual en:

- Nivel general del producto (total)
- Nivel por almacén
- Nivel por almacén + zona + ubicación + lote/serie (detalle operativo)

> En otras palabras: el movimiento es el “evento” y los niveles son el “saldo”.

---

## Buenas prácticas (cómo usar esta información)

Esta tabla es **interna**: los usuarios **no capturan movimientos manualmente**. Los movimientos se generan automáticamente al operar documentos (entradas, salidas, traspasos, producción, ajustes).

Lo importante para el usuario es **cómo consultarlos**:

- **Auditoría y trazabilidad**: usa los movimientos para entender *qué cambió*, *cuándo cambió*, *dónde cambió* y *qué documento lo originó*.
- **Conciliación**: si un saldo no cuadra, revisa los movimientos del producto en el almacén/zona/ubicación y valida el documento origen (recepción, envío, actividad de almacén u orden de trabajo).
- **Reservado/Retenido**: cuando veas inventario “no disponible”, normalmente corresponde a movimientos que lo movieron de **Disponible** a **Reservado** o **Retenido** (por surtido, producción, calidad, etc.).
- **Traspasos**: recuerda que un traspaso se refleja como salida del origen y entrada al destino; por eso verás más de un movimiento asociado a la misma operación.

> Nota: si necesitas “corregir” inventario, eso se hace mediante los documentos diseñados para ello (por ejemplo, ajustes/conteos). Esos documentos generan sus movimientos para mantener la trazabilidad.
