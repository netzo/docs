---
title: Traspasos entre almacenes
description: Guía práctica para mover inventario de forma controlada entre almacenes, manteniendo trazabilidad completa.
navigation:
  icon: i-mdi-swap-horizontal
seo:
  title: Traspasos entre almacenes | Netzo ERP
  description: Aprende cómo registrar, confirmar y rastrear traspasos de inventario entre almacenes en Netzo.
---

# Traspasos entre almacenes

Esta guía explica **cómo mover inventario entre almacenes** mediante un **traspaso**, asegurando control, trazabilidad y consistencia operativa.

Un traspaso representa un **movimiento físico real** de inventario:

- Sale de un almacén
- Viaja
- Entra a otro almacén

En Netzo, **no se mueve inventario entre almacenes con ajustes**. :br
El traspaso es el **único proceso válido** para este caso.

::note
Esta es una **guía práctica**. 
Para entender el modelo de inventario por almacén, consulta [Inventarios · Cómo funciona](/inventario).

:br

:br
::

---

## Antes de comenzar

Asegúrate de:

- Tener acceso al módulo **Inventarios**
- Tener permisos en **ambos almacenes** (origen y destino)
- Conocer la **variante** y cantidad a mover
- Confirmar que existe inventario **disponible** en el almacén origen

::warning
Un traspaso afecta **dos almacenes**. 
Verifica cuidadosamente origen, destino y cantidades.

:br
::

---

## Cuándo usar un traspaso (y cuándo no)

::card-group
  :::card{icon="i-mdi-check-circle" title="Cuándo SÍ usar traspaso"}
  - Mover inventario entre ubicaciones
  - Reabastecer otro almacén
  - Consolidar stock
  :::

  :::card{icon="i-mdi-close-circle" title="Cuándo NO usar traspaso"}
  - Corregir errores
  - Simular compras o ventas
  - Ajustar diferencias de conteo
  :::
::

---

## Pasos para realizar un traspaso

::steps{level="4"}
---------

#### Paso 1 · Accede al almacén origen

- Ve a **Inventarios → Almacenes**
- Selecciona el **almacén de origen**
- Confirma que el inventario esté **disponible**

#### Paso 2 · Inicia el traspaso

- Haz clic en **Registrar traspaso**
- Selecciona el **almacén destino**
- Define la variante y cantidad a mover

#### Paso 3 · Revisa y envía el traspaso

Antes de enviar:

- Verifica cantidades
- Verifica almacén destino
- Revisa el impacto esperado

Confirma el traspaso para **registrar la salida en el almacén origen**.

#### Paso 4 · Confirma la recepción en el almacén destino

- Accede al **almacén destino**
- Localiza el traspaso pendiente
- Confirma la recepción

Esto genera automáticamente la **entrada en el almacén destino**.
::

---

## Qué sucede internamente

Cuando el traspaso se completa:

- El almacén origen registra una **salida**
- El almacén destino registra una **entrada**
- Ambos movimientos quedan vinculados
- La trazabilidad queda completa

::note
Un traspaso incompleto refleja inventario “en tránsito”. :br
Esto es intencional y auditable.
::

---

## Resultado esperado

Al finalizar correctamente el traspaso:

- El inventario disminuye en el almacén origen
- El inventario aumenta en el almacén destino
- No se pierde ni duplica inventario
- El movimiento queda auditado en ambos almacenes

---

## Errores comunes

- Usar ajustes para mover inventario
- Confirmar destino incorrecto
- No cerrar la recepción en destino
- Traspasar inventario reservado

::tip
Si un traspaso queda pendiente, revisa el almacén destino :br
antes de hacer cualquier corrección manual.
::

---

## Relación con otros procesos

Los traspasos se relacionan con:

- Reabastecimiento interno
- Ventas multi-almacén
- Planeación logística
- Auditoría de inventarios

---

## Siguiente paso

- [Registro de entradas](/inventario/guias-practicas/entradas)
- [Registro de salidas](/inventario/guias-practicas/salidas)
- [Consulta de inventario por almacén](/inventario/guias-practicas/consulta)
