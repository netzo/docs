---
title: Introducción
description: Vista general del módulo de Producción de Netzo y su rol como capa de transformación y ejecución operativa.
---

El módulo de **Producción** es la **capa de transformación operativa** de Netzo. :br
Aquí se convierte la demanda (ventas) y la planeación interna en **ejecución real sobre el piso de producción**.

Producción no es solo fabricar. :br
Es el punto donde materiales, tiempos, personas y procesos se coordinan para **crear valor físico medible**.

::note
Si Ventas define **qué se promete** y Compras define **con qué se abastece**,
Producción define **cómo y cuándo se transforma**.
::

---

## ¿Para qué sirve el módulo de Producción?

Producción permite a la organización:

- Ejecutar la fabricación de productos
- Controlar el consumo de materiales
- Coordinar procesos y operaciones
- Dar trazabilidad a lo producido
- Conectar planeación con realidad operativa

Es el punto donde **el plan se enfrenta a la realidad**.

---

## Qué se gestiona aquí (y qué no)

### Sí se gestiona en Producción

- Órdenes de producción
- Consumo de materiales
- Producción de productos terminados
- Estados del proceso productivo
- Avance y cierre de órdenes
- Registro de eventos productivos

### No se hace en Producción

- Definir productos o variantes
- Comprar materiales
- Vender o cotizar
- Ajustar inventario sin causa productiva

::note
Producción **ejecuta procesos**,
no define la estructura ni las reglas globales.

:br
::

---

## Cómo se relaciona con el resto de Netzo

Producción conecta demanda, inventario y resultado final.

| Módulo         | Relación con Producción                |
| -------------- | -------------------------------------- |
| Ventas         | Origina la demanda a fabricar          |
| Compras        | Abastece insumos y materiales          |
| Inventarios    | Consume y genera existencias           |
| Datos Maestros | Define productos, variantes y unidades |
| Finanzas       | Impacta costos y valorización          |
| Reportes       | Analiza eficiencia y rendimiento       |

---

## Principios clave del módulo

### 1. Transformación controlada

Producción existe para asegurar que:

- El material correcto se consuma
- El producto correcto se genere
- El proceso sea trazable

Cada orden de producción deja rastro operativo.

---

### 2. Producción ligada a inventario

Todo lo que se produce:

- Consume inventario
- Genera inventario
- Cambia el estado físico de los materiales

::tip
Si no impacta inventario, no es producción.
::

---

### 3. Estados antes que resultados

Las órdenes de producción avanzan por estados
(planificada, en proceso, cerrada, etc.).

Esto permite:

- Coordinar equipos
- Medir avances
- Evitar cierres prematuros

::warning
Cerrar producción sin registro correcto
afecta inventarios, costos y reportes.
::

---

## ¿Quién debería usar este módulo?

El módulo de Producción está pensado para:

- Supervisores de planta
- Planeación y control de producción
- Operadores responsables
- Dirección de operaciones

No todos los usuarios requieren acceso directo.

---

## Cómo avanzar desde aquí

Este overview define el **rol del módulo**. :br
Las siguientes guías profundizan en su uso operativo.

### Guías recomendadas

- [Órdenes de producción](/produccion/ordenes)
- [Consumo de materiales](/produccion/consumos)
- [Estados de producción](/produccion/estados)
- [Inventarios](/inventario)

---

## Idea clave para recordar

> **Producción no es solo fabricar.** :br
> Es convertir planes y materiales en resultados trazables.
