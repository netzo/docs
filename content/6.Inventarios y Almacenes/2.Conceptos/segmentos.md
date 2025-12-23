---
title: Estados operativos (segmentos o buckets)
description: Explicación conceptual de los estados operativos del inventario y su rol en el control y la trazabilidad.
navigation:
  icon: i-mdi-layers
seo:
  title: Estados operativos de inventario | Netzo ERP
  description: Comprende qué son los estados operativos (segmentos o buckets) del inventario y cómo se utilizan para controlar disponibilidad y trazabilidad en Netzo.
---

## Qué son los estados operativos

En Netzo, el inventario **no es solo una cantidad**.
Cada unidad de inventario existe siempre dentro de un **estado operativo**, también llamado **segmento** o **bucket**.

Un estado operativo responde a una pregunta clave:

> **¿Qué tan disponible está este inventario para la operación?**

Los estados operativos permiten **clasificar el inventario según su uso, restricción o compromiso**, sin moverlo de almacén ni cambiar su formato.

---

## Por qué existen los estados operativos

En la operación real, no todo el inventario físico es utilizable al mismo tiempo.

Ejemplos comunes:
- Producto recién recibido que aún no se inspecciona
- Material apartado para una orden de venta
- Inventario bloqueado por calidad
- Existencias disponibles para venta inmediata

Los estados operativos existen para **modelar esta realidad** dentro del sistema, evitando:
- Sobreventas
- Uso indebido de inventario
- Ajustes manuales innecesarios
- Falta de trazabilidad

---

## Qué es un segmento (bucket)

Un **segmento** es una **subdivisión lógica del inventario dentro de un mismo almacén**.

Cada segmento:
- Pertenece a un almacén
- Aplica sobre una combinación específica de:
  - Variante
  - Formato
  - Lote o número de serie (si aplica)
- Representa una condición operativa distinta

Importante:

::note
Un segmento **no crea ni destruye inventario**.
Solo define **cómo puede usarse**.
::

---

## Estados operativos comunes

Aunque cada organización puede adaptar su uso, Netzo trabaja con estados base bien definidos.

### Disponible

Inventario **utilizable de inmediato**.

- Puede venderse
- Puede consumirse en producción
- Puede transferirse a otro almacén

Es el estado “libre” del inventario.

---

### Reservado

Inventario **comprometido a una orden específica**.

- Apartado para una orden de venta
- Asignado a una orden de producción
- No debe usarse para otros fines

::note
Reservado **no significa que ya salió del almacén**.
Solo significa que ya tiene dueño operativo.
::

---

### Retenido

Inventario **bloqueado temporalmente**.

Casos típicos:
- Inspección de calidad
- Producto dañado
- Cuarentena
- Validación documental

El inventario retenido:
- Existe físicamente
- No puede venderse ni usarse
- Puede liberarse o eliminarse después

---

### En existencia

Representa el **total físico** del inventario en el almacén.

Incluye:
- Disponible
- Reservado
- Retenido

::tip
En existencia ≠ Disponible
Esta separación es clave para evitar errores operativos.
::

---

## Relación entre los estados

Los estados operativos **no compiten entre sí**, se complementan.

Ejemplo típico:

- En existencia: 100
  - Disponible: 70
  - Reservado: 20
  - Retenido: 10

El total siempre se conserva.

---

## Cómo se mueven los inventarios entre estados

El inventario cambia de estado mediante **eventos explícitos**, no de forma implícita.

Ejemplos:
- Una venta reserva inventario → Disponible → Reservado
- Un rechazo de calidad → Disponible → Retenido
- Una liberación de calidad → Retenido → Disponible

Estos movimientos:
- No cambian el formato
- No cambian el almacén
- No cambian la cantidad total
- Quedan auditados

---

## Estados operativos vs otros procesos

Es importante no confundir los estados con otros tipos de ajustes.

| Proceso | Qué cambia | Qué NO cambia |
|------|-----------|--------------|
| Cambio de estado | Segmento | Cantidad, formato, almacén |
| Conteo cíclico | Cantidad | Formato, almacén |
| Conversión | Formato | Cantidad total |
| Entrada | Cantidad ↑ | — |
| Salida | Cantidad ↓ | — |
| Traspaso | Almacén | Cantidad total |

---

## Principio clave

> **El estado operativo define la intención de uso del inventario.**

No describe dónde está, ni cuánto es, ni cómo se empaca.
Describe **qué puede hacerse con él**.

---

## Buenas prácticas conceptuales

- No mezclar estados con correcciones de cantidad
- Usar **Retenido** antes de eliminar inventario
- Revisar **Disponible**, no solo **En existencia**
- Documentar cambios de estado críticos
- Mantener estados simples y claros

---

## Cómo se conecta con las guías prácticas

Esta guía explica **qué son** los estados operativos.

Para aprender **cómo usarlos**, consulta:
- [Cambios de estado](/inventario/cambios-de-estado)
- [Entradas de inventario](/inventario/entradas)
- [Salidas de inventario](/inventario/salidas)
- [Conteos cíclicos](/inventario/conteos-ciclicos)

---

## Idea clave para recordar

> **El inventario no solo existe: tiene contexto.**
> Ese contexto se define con estados operativos.
