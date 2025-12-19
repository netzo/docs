---
title: Campos personalizados
description: Aprende a crear y usar campos personalizados en Netzo para extender el sistema de forma controlada, clara y escalable.
---

# Campos personalizados

Los **campos personalizados** permiten extender el modelo de datos de Netzo para adaptarlo a las necesidades específicas de cada empresa, **sin modificar el núcleo del sistema**.

Son la forma correcta de capturar información adicional cuando:

- El dato es relevante para la operación
- No existe en el modelo estándar
- Debe ser estructurado, visible y controlado

::note
Los campos personalizados **no son notas libres** ni comentarios informales. 
Son datos formales que pasan a formar parte del sistema y su trazabilidad.

:br
::

---

## ¿Para qué sirven los campos personalizados?

Los campos personalizados existen para cubrir **variaciones reales del negocio** sin perder consistencia ni control.

Permiten:

- Adaptar Netzo a industrias o procesos específicos
- Capturar información propia de cada empresa
- Evitar dependencias de Excel o notas externas
- Controlar visibilidad y edición por rol

En otras palabras: :br**extienden el sistema sin romperlo**.

---

## ¿Cuándo usar (y cuándo no usar) campos personalizados?

### Sí debes usar campos personalizados cuando:

- El dato se repite en muchos registros
- El dato debe consultarse, filtrarse o reportarse
- El dato afecta decisiones operativas
- El dato requiere permisos o validaciones

### No debes usarlos cuando:

- Es información ocasional o anecdótica
- Solo sirve como comentario
- No se usará después
- Ya existe un campo estándar que cumple el propósito

::tip
Si no estás seguro, pregúntate: **¿este dato seguirá siendo relevante dentro de 6 meses?**

:br
::

---

## Dónde se administran

Los campos personalizados se gestionan desde:

**Administración → Campos personalizados**

Desde ahí se definen de forma centralizada y luego se aplican a las entidades correspondientes.

---

## Cómo funcionan los campos personalizados en Netzo

Todo campo personalizado tiene **cuatro dimensiones clave**:

1. **Entidad** → A qué tipo de registro pertenece
2. **Tipo de dato** → Qué clase de información almacena
3. **Reglas** → Validaciones, obligatoriedad y visibilidad
4. **Permisos** → Quién puede verlo o editarlo

Estas decisiones determinan su impacto en la operación.

---

## Entidades compatibles

Los campos personalizados siempre se asignan a una **entidad específica** (tabla).

Ejemplos comunes:

- Productos
- Variantes de producto
- Clientes
- Proveedores
- Órdenes de compra
- Órdenes de producción
- Movimientos de inventario

::note
Un campo personalizado **no es global por defecto**. 
Siempre pertenece a una entidad concreta.

:br
::

---

## Tipos de campo disponibles

El tipo de campo define **qué clase de información** se puede capturar.

| Tipo de campo | Uso típico                           |
| ------------- | ------------------------------------ |
| Texto         | Códigos, observaciones estructuradas |
| Número        | Medidas, factores, cantidades        |
| Fecha         | Fechas clave, vencimientos           |
| Booleano      | Sí / No                              |
| Enum          | Selección controlada de opciones     |
| Referencia    | Relación con otro registro           |

Elegir correctamente el tipo mejora la calidad del dato y evita errores.

---

## Reglas y validaciones

Los campos personalizados pueden incluir reglas para asegurar **consistencia**.

| Regla             | Qué controla                 |
| ----------------- | ---------------------------- |
| Obligatorio       | Si el campo debe capturarse  |
| Editable          | Si puede modificarse         |
| Visible           | Si se muestra en la interfaz |
| Valor por defecto | Valor inicial automático     |
| Validación        | Rangos, formatos o lógica    |

::note
Una buena validación previene errores antes de que ocurran.
::

---

## Visibilidad y permisos

Los campos personalizados respetan el **modelo de roles y permisos de Netzo**.

Esto permite:

- Que algunos roles vean el campo
- Que otros lo editen
- Que otros no lo vean en absoluto

::tip
No todos los usuarios necesitan ver todos los campos. :br
Menos visibilidad suele significar menos errores.
::

---

## Impacto en la operación

Una vez creado, un campo personalizado:

- Aparece en formularios de captura
- Puede mostrarse en vistas y listas
- Puede usarse en filtros y reportes
- Forma parte de la auditoría del registro

::warning
Modificar o eliminar campos personalizados con datos existentes
puede afectar información histórica.
::

---

## Ejemplos comunes de campos personalizados bien definidos

Los siguientes ejemplos muestran **buenas prácticas reales**: :br
campos con propósito claro, tipo correcto y alcance bien definido.

### Operación e Inventario

| Campo                 | Entidad               | Tipo     | Uso correcto               | Visibilidad recomendada |
| --------------------- | --------------------- | -------- | -------------------------- | ----------------------- |
| Lote interno          | Producto / Movimiento | Texto    | Identificar lotes internos | Producción, Calidad     |
| Prioridad de despacho | Orden de venta        | Enum     | Definir urgencia logística | Logística, Ventas       |
| Ubicación secundaria  | Inventario            | Texto    | Referencia adicional       | Almacén                 |
| Requiere inspección   | Movimiento            | Booleano | Marcar material a revisar  | Calidad                 |

---

### Producción y Calidad

| Campo                   | Entidad              | Tipo  | Uso correcto                     | Visibilidad recomendada |
| ----------------------- | -------------------- | ----- | -------------------------------- | ----------------------- |
| Proceso especial        | Orden de producción  | Enum  | Identificar procesos no estándar | Producción              |
| Resultado de inspección | Producción / Calidad | Enum  | Aprobado / Rechazado             | Calidad, Supervisión    |
| Fecha de liberación     | Orden de producción  | Fecha | Control de liberación            | Producción              |
| Observación técnica     | Orden de producción  | Texto | Nota técnica estructurada        | Producción              |

---

### Ventas y Clientes

| Campo                        | Entidad        | Tipo     | Uso correcto                | Visibilidad recomendada |
| ---------------------------- | -------------- | -------- | --------------------------- | ----------------------- |
| Segmento de cliente          | Cliente        | Enum     | Clasificar clientes         | Ventas, Dirección       |
| Condición comercial especial | Cliente        | Booleano | Reglas comerciales          | Ventas                  |
| Proyecto asociado            | Orden de venta | Texto    | Relacionar venta a proyecto | Ventas                  |
| Fecha compromiso cliente     | Orden de venta | Fecha    | Compromiso acordado         | Ventas, Logística       |

---

### Finanzas y Control

| Campo                            | Entidad            | Tipo     | Uso correcto             | Visibilidad recomendada |
| -------------------------------- | ------------------ | -------- | ------------------------ | ----------------------- |
| Centro de costos                 | Orden / Movimiento | Enum     | Clasificación financiera | Finanzas                |
| Tipo de gasto                    | Compra             | Enum     | Clasificar gastos        | Finanzas                |
| Requiere autorización financiera | Registro           | Booleano | Forzar aprobación        | Finanzas                |
| Referencia contable              | Registro           | Texto    | Enlace contable          | Finanzas                |

---

### Lo que **NO** es un buen campo personalizado

| Mal ejemplo              | Por qué es incorrecto |
| ------------------------ | --------------------- |
| Notas adicionales        | Debe ser una nota     |
| Info extra               | No define propósito   |
| Campo 1 / Campo 2        | No es autoexplicativo |
| Texto libre para estados | Debe ser Enum         |
| Duplicar campos estándar | Genera confusión      |

::tip
Un buen campo personalizado **se entiende sin explicación adicional**
y cumple un propósito claro dentro del proceso.
::

---

## Regla práctica para diseñar campos personalizados

Antes de crear un campo, valida que cumpla al menos **3 de estas 4 condiciones**:

1. Se usará en muchos registros
2. Se consultará o filtrará después
3. Afecta decisiones operativas
4. Requiere control de visibilidad o edición

Si no cumple, probablemente **no debería ser un campo personalizado**.

---

## Idea clave para recordar

> **Los campos personalizados no son para improvisar.**:br
> Son una herramienta de diseño del sistema.

Usados correctamente, hacen a Netzo flexible. :br
Usados sin criterio, lo vuelven confuso.

---

## Continuar

- [Roles y permisos](/administracion/roles)
- [Entidades operativas](/administracion/entidades)
- [Procesos atómicos](/procesos)
