---
title: Almacenes
description: Entiende cómo Netzo organiza el inventario a partir de almacenes independientes y cómo se gestionan las entradas y salidas.
navigation:
  icon: i-mdi-domain
seo:
  title: Almacenes | Contexto del inventario en Netzo ERP
  description: Aprende cómo cada almacén gestiona su propio inventario, incluyendo entradas, salidas y traspasos, y por qué esto es clave para la operación.
---

# Almacenes como contexto del inventario

En Netzo, **el inventario siempre pertenece a un almacén**. :br
No existe un inventario global único para toda la empresa.

Cada almacén mantiene su **propia realidad operativa**, con existencias, estados y movimientos completamente independientes.

::note
El almacén no es solo una ubicación física.
Es el **contexto** que da significado al inventario.

:br
::

---

## El concepto clave

> **Inventario = Variante + Almacén + Estado**

Sin un almacén definido, el inventario **no existe** dentro del sistema.

---

## ¿Qué es un almacén en Netzo?

Un **almacén** representa un lugar físico o lógico donde el inventario vive y se controla.

Puede ser una ubicación real o una abstracción operativa.

::card-group
  :::card{icon="i-mdi-factory" title="Planta"}
  Inventario ubicado en una instalación productiva, normalmente conectado a órdenes de producción.
  :::

  :::card{icon="i-mdi-warehouse" title="CEDIS"}
  Centro de distribución enfocado en surtido, despacho y logística.
  :::

  :::card{icon="i-mdi-truck-fast" title="Almacén externo"}
  Inventario gestionado por terceros, pero controlado y auditado dentro de Netzo.
  :::

  :::card{icon="i-mdi-map-marker-radius" title="Última milla"}
  Inventario cercano al cliente final para entregas rápidas.
  :::
::

Cada uno de estos almacenes:

- Tiene su propio inventario
- Tiene reglas operativas distintas
- Puede tener permisos distintos

---

## Independencia entre almacenes

Cada almacén funciona como un **entorno de inventario autónomo**.

Esto implica que:

- El stock **no se comparte automáticamente**
- Un movimiento en un almacén **no afecta a otro**
- Las reservas se hacen por almacén
- Los estados se controlan localmente
- La trazabilidad siempre indica *en qué almacén ocurrió algo*

::note
Un mismo artículo puede existir en varios almacenes,
pero **cada almacén mantiene su propia realidad de inventario**.

:br
::

---

## Ejemplo práctico

El mismo artículo en dos almacenes distintos:

- **Almacén Monterrey**
  - Disponible: 200
- **Almacén Guadalajara**
  - Retenido: 200

Ambos inventarios:

- Existen al mismo tiempo
- No se mezclan
- No se compensan entre sí

Netzo refleja esta realidad sin atajos.

---

## Entradas y salidas de almacén

Dentro de cada almacén, el inventario **solo cambia mediante operaciones explícitas**. :br
Estas operaciones representan **eventos reales** de la operación diaria.

En Netzo, **nada aparece ni desaparece sin contexto**.

---

## Entradas de almacén

Una **entrada de almacén** incrementa el inventario de un almacén específico. :br
Siempre tiene un **origen claro** y queda registrada con trazabilidad completa.

::card-group
  :::card{icon="i-mdi-cart-arrow-down" title="Entradas por Compras"}
  Se generan cuando se recibe mercancía de un proveedor como resultado de una orden de compra.
  :::

  :::card{icon="i-mdi-factory" title="Entradas por Producción"}
  Se generan cuando una orden de producción termina y libera producto terminado al almacén.
  :::

  :::card{icon="i-mdi-swap-horizontal" title="Entradas por Traspaso"}
  Se generan automáticamente en el almacén destino como parte de un traspaso entre almacenes.
  :::
::

---

### Entradas por Compras

Representan la **recepción física** de materiales o productos provenientes de un proveedor.

Características clave:

- Incrementan inventario en un almacén definido
- Están vinculadas a una orden de compra
- Reflejan lo que **realmente se recibió**, no solo lo facturado

::note
Una orden de compra no crea inventario.
El inventario existe **hasta que la mercancía entra al almacén**.

:br
::

---

### Entradas por Producción

Se generan cuando Producción libera producto terminado o semielaborado.

Características:

- Incrementan inventario del producto producido
- Se originan desde una orden de producción
- Conectan Producción con Inventarios

Esto asegura que solo se inventaríe lo que **efectivamente se fabricó**.

---

### Entradas por Traspaso

Cuando un traspaso se completa:

- El almacén destino registra una **entrada automática**
- Esta entrada está ligada a la salida del almacén origen

No se capturan manualmente.

---

## Salidas de almacén

Una **salida de almacén** reduce el inventario de un almacén específico. :br
Siempre responde a un **uso, consumo o movimiento real**.

::card-group
  :::card{icon="i-mdi-handshake" title="Salidas por Ventas"}
  Se generan cuando una orden de venta se surte desde un almacén.
  :::

  :::card{icon="i-mdi-cogs" title="Salidas por Producción"}
  Se generan cuando materias primas, componentes o insumos se consumen en producción.
  :::

  :::card{icon="i-mdi-swap-horizontal" title="Salidas por Traspaso"}
  Se generan automáticamente en el almacén origen durante un traspaso.
  :::
::

---

### Salidas por Ventas

Representan el **surtido físico** de una orden de venta.

Flujo típico:

1. La venta reserva inventario
2. Se surte desde un almacén específico
3. El inventario sale físicamente
4. Se registra la salida

::note
La reserva no reduce inventario. :br
La salida refleja la entrega real.
::

---

### Salidas por Producción

Se generan cuando Producción **consume inventario**:

- Materias primas
- Componentes
- Insumos

Esto conecta directamente:
**Inventarios → Producción → Producto terminado**

---

### Salidas por Traspaso

En un traspaso:

- El almacén origen registra una salida
- El almacén destino registra una entrada

Ambos eventos están vinculados y auditados.

---

## Lo que NO debe hacerse

::warning
No utilices ajustes manuales para:

- Simular compras
- Simular ventas
- Mover inventario entre almacenes
::

Los ajustes existen solo para **correcciones excepcionales**, no para la operación diaria.

---

## Trazabilidad y auditoría

Cada entrada y salida queda registrada con:

- Usuario responsable
- Fecha y hora
- Almacén
- Origen del movimiento
- Documento relacionado (venta, compra, producción)

Esto permite control, auditoría y análisis real.

---

## Buenas prácticas

- Define todos los almacenes antes de iniciar operación
- Asigna permisos por almacén
- No mezcles funciones distintas en un mismo almacén
- Usa traspasos para mover stock
- Analiza inventarios **por almacén**, no de forma agregada

---

## Idea clave para recordar

> **En Netzo, el inventario siempre tiene contexto.** :br
> Ese contexto es el almacén.

Este enfoque permite crecer sin perder control.

---

## Continuar

- [Inventarios en almacén](/inventario/inventarios)
- [Movimientos y ajustes](/inventario/movimientos)
- [Traspasos entre almacenes](/inventario/traspasos)
- [Compras](/compras)
- [Producción](/produccion)
- [Ventas](/ventas)
