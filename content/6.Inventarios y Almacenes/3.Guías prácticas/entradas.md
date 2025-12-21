---
title: Registro de entradas
description: Guía práctica para registrar correctamente entradas de inventario en un almacén, según su origen.
navigation:
  icon: i-mdi-truck-delivery
seo:
  title: Registro de entradas de inventario | Netzo ERP
  description: Aprende cómo registrar entradas de inventario por compra, producción, traspaso o de forma manual en Netzo.
---

Esta guía explica **cómo registrar entradas de inventario en un almacén** y **cuándo utilizar cada tipo de entrada**, según el origen real de la mercancía.

Una entrada de inventario representa **algo que llegó físicamente al almacén**.
Registrar correctamente la entrada garantiza:

- Existencias reales
- Trazabilidad completa
- Conexión correcta con compras, producción o traspasos

::note
Esta es una **guía práctica**.
Para entender cómo funciona el inventario por almacén, consulta
[Inventarios · Cómo funciona](/inventario).
::

---

## Antes de comenzar

Asegúrate de:

- Tener acceso al módulo **Inventarios**
- Saber **en qué almacén** estás operando
- Conocer **el origen real** de la mercancía
- Tener permisos para registrar entradas

::warning
Registrar una entrada impacta inventario real.
Verifica siempre el almacén antes de confirmar.
::

---

## Tipos de entrada (cuál usar en cada caso)

Selecciona el tipo de entrada **según el origen real del inventario**.

::card-group
  :::card{icon="i-mdi-cart-arrow-down" title="Entrada por compra"}
  Úsala cuando recibes mercancía de un **proveedor** como resultado de una orden de compra.
  :::

  :::card{icon="i-mdi-factory" title="Entrada desde producción"}
  Úsala cuando **Producción libera producto terminado** o semielaborado al almacén.
  :::

  :::card{icon="i-mdi-swap-horizontal" title="Entrada por traspaso"}
  Se genera automáticamente cuando un **traspaso entre almacenes** se completa.
  :::

  :::card{icon="i-mdi-alert" title="Entrada manual"}
  Úsala solo en **casos excepcionales** donde no exista otro proceso válido.
  :::

  :::card{icon="i-mdi-paperclip" title="Adjuntar documentos"}
  Usa esta opción para **agregar evidencias** como facturas, remisiones o comprobantes.
  :::
::

---

## Pasos generales para registrar una entrada

::steps
---
"0": Ve a **Inventarios → Almacenes**
"1": Selecciona el almacén donde llegó la mercancía
level: "4"
---
------------

## Resultado esperado

Al registrar correctamente una entrada:

- El inventario del almacén **incrementa**
- El movimiento queda **auditado**
- La trazabilidad queda completa
- Otros almacenes **no se ven afectados**

## Cuándo NO usar una entrada manual

  :::warning
  No utilices entradas manuales para:

  - Simular compras
  - Simular producción
  - Corregir errores recientes
  - Mover inventario entre almacenes
  :::

Las entradas manuales existen solo para **correcciones excepcionales y justificadas**.

## Errores comunes

- Registrar la entrada en el almacén incorrecto
- Usar entrada manual cuando existe una orden
- Confundir formato con unidad base
- Confirmar sin revisar cantidades

  :::tip
  Si algo no cuadra después de una entrada, revisa el historial del almacén antes de hacer ajustes.
  :::

## Relación con otros procesos

El registro de entradas se relaciona con:

- Órdenes de compra
- Órdenes de producción
- Traspasos entre almacenes
- Inventario disponible
- Auditoría y reportes

## Siguiente paso

- [Registro de salidas](/inventario/guias-practicas/salidas)
- [Traspasos entre almacenes](/inventario/guias-practicas/traspasos)
- [Consulta de inventario por almacén](/inventario/guias-practicas/consulta)
::
