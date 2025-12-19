---
title: Introducción
description: El módulo de Inventarios y Almacenes permite controlar existencias reales por almacén, con estados, trazabilidad y reglas operativas independientes para cada ubicación.
---

El módulo de **Inventarios** es el **corazón operativo de Netzo**. Aquí se refleja, en tiempo real, **qué existe físicamente**, **dónde está**, **en qué estado se encuentra** y **qué tan disponible está para la operación**.

---

## Inventario por almacén (concepto clave)

En Netzo, **el inventario siempre pertenece a un almacén específico**. :br
No existe un inventario único o global para toda la empresa.

Cada almacén gestiona su inventario de forma **independiente**, con su propia:

- Lista de existencias
- Historial de movimientos
- Estados (disponible, reservado, retenido)
- Reglas operativas
- Permisos de acceso

En la práctica, esto significa que **cada almacén funciona como su propio entorno de inventario** dentro del sistema.

::note
Un mismo artículo puede existir en varios almacenes,
pero **cada almacén mantiene su propia realidad de inventario**.

:br
::

---

## Qué implica este modelo

Este diseño refleja cómo opera una empresa en el mundo real.

Implica que:

- Un movimiento en un almacén **no afecta automáticamente a otro**
- Las reservas se hacen por almacén
- Los estados del inventario se controlan localmente
- Los permisos pueden variar por ubicación
- La trazabilidad siempre indica *en qué almacén ocurrió algo*

Ejemplo:

- El Almacén Monterrey puede tener stock disponible
- El Almacén Guadalajara puede tener el mismo artículo retenido
- Ambos inventarios existen y se controlan de forma separada

---

## Qué representa el inventario en Netzo

Dentro de cada almacén, el inventario es un **estado dinámico**, no solo un número.

Cada registro de inventario responde a cuatro preguntas clave:

1. **Qué variante** es
2. **En qué almacén** se encuentra
3. **En qué formato o unidad** se gestiona
4. **En qué estado operativo** está

Esto permite una visión precisa y accionable del stock por ubicación.

---

## Variante como unidad base

Todo el inventario se controla a nivel de **variantes de producto**, nunca a nivel de producto genérico.

Ejemplos:

- Bolsa 100 g
- Caja de cartón 22 × 25 × 43 cm
- Bobina 240 mm × 22 m

::note
En Netzo, **no se inventarían conceptos generales**.
Todo inventario corresponde a una variante concreta y operable.

:br
::

---

## Formatos dentro del inventario

Los **formatos** permiten operar el inventario como se maneja en la realidad:
cajas, displays, sacos, bobinas, etc.

Ejemplos comunes:

- Caja de 6 piezas
- Saco de 25 kg

El inventario:

- **Existe** en la unidad base de la variante
- **Se visualiza y se opera** en formatos cuando es necesario

::note
Un formato no crea inventario adicional. :br
Solo define cómo se agrupa y se mueve el inventario existente.
::

---

## Estados del inventario (por almacén)

Cada almacén mantiene estados independientes para su inventario.

| Estado        | Significado                   |
| ------------- | ----------------------------- |
| Disponible    | Puede usarse o venderse       |
| Reservado     | Comprometido a una orden      |
| Retenido      | Bloqueado por calidad o regla |
| En existencia | Total físico del almacén      |

::tip
Disponible ≠ En existencia :br
Esta separación evita sobreventas y errores operativos.
::

---

## Operaciones dentro de cada almacén

Cada almacén gestiona sus propias operaciones de inventario:

- Entradas de mercancía
- Salidas de mercancía
- Movimientos internos
- Ajustes manuales
- Conteos cíclicos
- Cambios de estado
- Eliminaciones controladas

Todas las operaciones quedan:

- Auditadas
- Asociadas a un usuario
- Relacionadas con un almacén específico

---

## Movimiento entre almacenes

Cuando el inventario debe cambiar de ubicación, se utilizan **traspasos**.

Un traspaso:

- Reduce inventario en el almacén de origen
- Incrementa inventario en el almacén destino
- Deja registro completo en ambos lados

Esto asegura control total y trazabilidad real.

---

## Relación con otros módulos

El inventario de cada almacén se conecta con:

| Módulo         | Relación                     |
| -------------- | ---------------------------- |
| Datos Maestros | Define qué artículos existen |
| Compras        | Genera entradas por almacén  |
| Ventas         | Genera reservas y salidas    |
| Producción     | Consume o produce inventario |
| Reportes       | Analiza niveles por almacén  |
| Administración | Define permisos y reglas     |

---

## Buenas prácticas iniciales

- Define la estructura de almacenes antes de operar
- Asigna permisos por almacén
- No mezcles inventarios entre ubicaciones
- Usa traspasos para mover stock
- Revisa estados por almacén, no de forma agregada

::warning
Modificar inventarios sin entender su impacto por almacén
puede generar descuadres operativos.
::

---

## Idea clave para recordar

> **En Netzo, el inventario siempre tiene contexto.**:br
> Ese contexto es el almacén.

Este enfoque permite crecer sin perder control.

---

## Continuar

- [Inventarios en almacén](/inventario/inventarios)
- [Movimientos y ajustes](/inventario/movimientos)
- [Traspasos entre almacenes](/inventario/traspasos)
- [Formatos y conversiones](/datos-maestros/formatos)
- [Datos Maestros](/datos-maestros)
