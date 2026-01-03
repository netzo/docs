---
title: Introducción
description: El módulo de Inventarios permite controlar el inventario físico por almacén, con visibilidad clara de existencias, disponibilidad y operaciones.
navigation:
  icon: i-mdi-warehouse
seo:
  title: Introducción al Módulo de Inventarios | Inventarios en Netzo ERP
  description: Conoce cómo el módulo de Inventarios en Netzo ERP gestiona el inventario físico por almacén, con control de existencias, disponibilidad y trazabilidad.
---

El módulo de **Inventarios y Almacenes** permite controlar **qué existe físicamente**, **en qué almacén se encuentra** y **qué tan disponible está** para la operación diaria, reflejando la **realidad operativa** y no solo cifras contables.

En Netzo, el inventario se gestiona **por almacén**, entendiendo cada uno como un entorno independiente con su propia realidad de stock. Esto permite conocer existencias reales, evitar sobreventas y tomar decisiones basadas en lo que realmente puede usarse o despacharse.

Todo cambio ocurre como resultado de **operaciones reales** —entradas, salidas, transferencias y ajustes controlados—, garantizando trazabilidad, auditoría y consistencia entre el sistema y la operación física, y convirtiendo al inventario en una herramienta activa para la planeación y ejecución diaria.

### Capacidades clave

::card-group
  :::card{icon="i-mdi-warehouse" title="Control por almacén"}
  Gestión de inventario físico de forma independiente para cada almacén.
  :::

  :::card{icon="i-mdi-eye-outline" title="Visibilidad de existencias"}
  Consulta clara del inventario total, disponible y comprometido.
  :::

  :::card{icon="i-mdi-package-variant-closed" title="Lotes y números de serie"}
  Trazabilidad por lote o por unidad según el nivel de control requerido.
  :::

  :::card{icon="i-mdi-bookmark-outline" title="Reservaciones y retenciones"}
  Compromiso y bloqueo de inventario sin alterar el total físico.
  :::

  :::card{icon="i-mdi-swap-horizontal" title="Operaciones de inventario"}
  Entradas, salidas, transferencias y ajustes basados en eventos reales.
  :::

  :::card{icon="i-mdi-link-variant" title="Integración operativa"}
  Conexión directa con compras, ventas y producción mediante movimientos.
  :::

  :::card{icon="i-mdi-chart-line" title="Reportes y análisis"}
  Análisis de niveles, rotación y comportamiento del inventario.
  :::

  :::card{icon="i-mdi-timeline-clock-outline" title="Trazabilidad completa"}
  Historial auditable de todos los movimientos y eventos de inventario.
  :::

  :::card{icon="i-mdi-shield-account-outline" title="Reglas y permisos"}
  Control de acceso y operación definido por almacén y rol.
  :::

  :::card{icon="i-mdi-package-variant" title="Formatos y unidades"}
  Soporte para empaques, kits y unidades logísticas sin duplicar inventario.
  :::

  :::card{icon="i-mdi-clipboard-check-outline" title="Auditoría y control"}
  Registro de cambios, ajustes y validaciones con causa documentada.
  :::

  :::card{icon="i-mdi-bell-alert-outline" title="Alertas de inventario"}
  Notificaciones automáticas ante niveles críticos o condiciones definidas.
  :::

  :::card{icon="i-mdi-map-marker-multiple" title="Múltiples ubicaciones"}
  Operación simultánea de múltiples almacenes y centros logísticos.
  :::
::


---

## Inventario por almacén

En Netzo, **todo el inventario pertenece a un almacén específico**.
No existe un inventario fisico global único para toda la empresa, sino que este se calcula como la suma de los inventarios individuales de cada almacén.

Cada almacén representa un **entorno operativo independiente**, con su propia realidad de inventario.

::card-group
  :::card{icon="i-mdi-calculator-variant" title="Inventario global"}
  Suma de inventarios de todos los almacenes.
  :::

  :::card{icon="i-mdi-warehouse" title="Almacén"}
  Contexto donde vive el inventario. Representa una ubicación física real o virtual.
  Todo stock siempre pertenece a un almacén concreto.
  :::

  :::card{icon="i-mdi-layers-outline" title="Inventario por almacén"}
  Cada almacén mantiene sus propias existencias y disponibilidad.
  No se mezclan inventarios entre ubicaciones.
  :::

  :::card{icon="i-mdi-account-key-outline" title="Reglas y permisos"}
  Cada almacén puede tener reglas operativas y permisos distintos.
  :::
::

::tip{ icon="i-mdi-information-outline"}
Un mismo artículo puede existir en varios almacenes,
pero **cada almacén mantiene su propia realidad de inventario**.
::

---

## ¿Qué información controla el inventario?

El inventario en Netzo no es solo un número.
Describe **cómo puede utilizarse el stock** en la operación diaria.

::card-group
  :::card{icon="i-mdi-database-outline" title="En existencia"}
  Total físico registrado en el almacén.
  :::

  :::card{icon="i-mdi-check-circle-outline" title="Disponible"}
  Inventario que puede usarse, venderse o consumirse.
  :::

  :::card{icon="i-mdi-bookmark-outline" title="Reservado"}
  Inventario comprometido para operaciones futuras.
  :::

  :::card{icon="i-mdi-lock-outline" title="Bloqueado"}
  Inventario temporalmente no utilizable por calidad o control.
  :::
::

---

## Variantes y formatos

El inventario siempre se controla a nivel de **variantes de producto**
(SKUs reales con los que se compra, almacena y vende).

Los **formatos** permiten operar el inventario como en la vida real:
cajas, sacos, kits, tarimas, etc.

::card-group
  :::card{icon="i-mdi-tag-outline" title="Variantes"}
  Unidad base del inventario.
  Cada movimiento afecta a una variante concreta.
  :::

  :::card{icon="i-mdi-package-variant" title="Formatos"}
  Presentaciones logísticas de una variante.
  No crean inventario adicional.
  :::
::

---

## Operaciones de inventario

El módulo de Inventarios soporta las operaciones básicas del día a día:

::card-group
  :::card{icon="i-mdi-arrow-down-bold" title="Entradas"}
  Recepciones de mercancía, producción o devoluciones.
  :::

  :::card{icon="i-mdi-arrow-up-bold" title="Salidas"}
  Despachos, consumos productivos o eliminaciones.
  :::

  :::card{icon="i-mdi-swap-horizontal" title="Transferencias"}
  Movimiento de inventario entre almacenes.
  :::

  :::card{icon="i-mdi-clipboard-check-outline" title="Conteos y ajustes"}
  Correcciones controladas para alinear sistema y realidad.
  :::
::

---

## Relación con otros módulos

El inventario es un módulo **transversal** que se conecta con:

- **Compras** → entradas de mercancía
- **Ventas** → reservaciones y salidas
- **Producción** → consumos y producto terminado
- **Calidad** → bloqueos y retenciones
- **Planeación** → solicitudes de traslado

::note{ icon="i-mdi-link-variant"}
Los demás módulos **no modifican inventario directamente**.
Siempre interactúan a través de operaciones de inventario.
::

---

## Cómo usar esta documentación

Este módulo se documenta en dos niveles:

::card-group
  :::card{icon="i-mdi-book-open-outline" title="Conceptos"}
  Explican cómo piensa el sistema (modelo, movimientos, segmentos).
  :::

  :::card{icon="i-mdi-playlist-check" title="Guías prácticas"}
  Pasos claros para ejecutar operaciones reales.
  :::
::

::note{icon="i-mdi-compass-outline"}
Recomendación:
Empieza por **Conceptos** para entender el modelo
y luego pasa a las **Guías prácticas**.
::
