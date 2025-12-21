---
title: Registro de salidas
description: Guía práctica para registrar correctamente salidas de inventario desde un almacén, según su destino u origen.
navigation:
  icon: i-mdi-truck-remove
seo:
  title: Registro de salidas de inventario | Netzo ERP
  description: Aprende cómo registrar salidas de inventario por venta, producción, traspaso o de forma manual en Netzo.
---

Esta guía explica **cómo registrar salidas de inventario desde un almacén** y **cuándo utilizar cada tipo de salida**, según el destino real del inventario.

Una salida de inventario representa **algo que deja físicamente el almacén**.
Registrar correctamente la salida garantiza:

- Existencias reales
- Cumplimiento de compromisos
- Trazabilidad completa
- Impacto correcto en ventas o producción

::note
Esta es una **guía práctica**.
Para entender cómo funcionan los estados del inventario, consulta
[Inventarios · Cómo funciona](/inventario).
::

---

## Antes de comenzar

Asegúrate de:

- Tener acceso al módulo **Inventarios**
- Saber **desde qué almacén** saldrá el inventario
- Conocer **el destino real** del material
- Tener permisos para registrar salidas

::warning
Registrar una salida reduce inventario real.
Verifica siempre el almacén y las cantidades antes de confirmar.
::

---

## Tipos de salida (cuál usar en cada caso)

Selecciona el tipo de salida **según el destino real del inventario**.

::card-group
  :::card{icon="i-mdi-handshake" title="Salida por venta"}
  Úsala cuando surtas físicamente una **orden de venta** hacia un cliente.
  :::

  :::card{icon="i-mdi-cogs" title="Salida a producción"}
  Úsala cuando **materias primas o componentes** se consumen en una orden de producción.
  :::

  :::card{icon="i-mdi-swap-horizontal" title="Salida por traspaso"}
  Se genera automáticamente en el **almacén origen** durante un traspaso entre almacenes.
  :::

  :::card{icon="i-mdi-alert" title="Salida manual"}
  Úsala solo en **casos excepcionales**, cuando no existe otro proceso válido.
  :::

  :::card{icon="i-mdi-clipboard-check" title="Validar antes de confirmar"}
  Paso crítico para asegurar que la salida es correcta antes de afectar inventario.
  :::
::

---

## Pasos generales para registrar una salida

::steps
---
"0": Ve a **Inventarios → Almacenes**
"1": Selecciona el almacén desde donde saldrá el inventario
level: "4"
---
------------

## Resultado esperado

Al registrar correctamente una salida:

- El inventario del almacén **disminuye**
- Las reservas asociadas se actualizan (si aplica)
- El movimiento queda **auditado**
- La trazabilidad queda completa

## Cuándo NO usar una salida manual

  :::warning
  No utilices salidas manuales para:

  - Simular ventas
  - Simular consumo productivo
  - Corregir errores recientes
  - Mover inventario entre almacenes
  :::

Las salidas manuales existen solo para **casos excepcionales y justificados**.

## Errores comunes

- Registrar la salida en el almacén incorrecto
- Retirar inventario reservado para otra orden
- Confundir formato con unidad base
- Confirmar sin validar disponibilidad

  :::tip
  Si una salida falla, revisa primero el estado del inventario
  antes de hacer ajustes manuales.
  :::

## Relación con otros procesos

El registro de salidas se relaciona con:

- Órdenes de venta
- Órdenes de producción
- Traspasos entre almacenes
- Inventario disponible y reservado
- Auditoría y reportes

## Siguiente paso

- [Registro de entradas](/inventario/guias-practicas/entradas)
- [Traspasos entre almacenes](/inventario/guias-practicas/traspasos)
- [Consulta de inventario por almacén](/inventario/guias-practicas/consulta)
::
