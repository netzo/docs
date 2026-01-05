---
title: Introducción
description: Vista general del módulo de Administración de Netzo y su rol como capa de gobierno del sistema.
seo:
  title: Administración | Gobierno del sistema en Netzo ERP
  description: Configura usuarios, roles, permisos y reglas globales que gobiernan cómo opera Netzo en toda la organización.
---

# Administración

El módulo de **Administración** es la **capa de gobierno** de Netzo. :br
Aquí se definen las reglas estructurales que determinan **cómo funciona el sistema completo**.

En Administración **no se ejecutan operaciones diarias**. :br
En su lugar, se configuran las bases sobre las cuales operan todos los demás módulos.

::note
Si Inventarios, Producción o Ventas definen **lo que sucede**,
Administración define **bajo qué reglas puede suceder**.
::

---

## ¿Para qué sirve el módulo de Administración?

Administración permite a la organización:

- Definir su identidad y contexto operativo
- Controlar quién puede acceder al sistema y qué puede hacer
- Establecer estructuras reales del negocio (empresas, almacenes, equipos)
- Configurar reglas transversales que afectan a todos los módulos
- Garantizar seguridad, trazabilidad y consistencia

Es el punto donde **la operación se convierte en sistema**.

---

## Qué se configura aquí (y qué no)

### Sí se configura en Administración

- Identidad visual y branding
- Región, idioma y formatos
- Moneda, impuestos y reglas financieras base
- Usuarios, roles y permisos
- Acceso a módulos
- Campos personalizados
- Empresas fiscales
- Equipos operativos (compras, ventas)
- Fábricas y almacenes
- Auditoría y eventos del sistema

### No se hace en Administración

- Registrar movimientos de inventario
- Crear órdenes de compra o venta
- Ejecutar producción
- Capturar operaciones diarias

::note
Administración **no es un módulo operativo**.
Es un módulo de **configuración y control**.

:br
::

---

## Cómo se relaciona con el resto de Netzo

Administración actúa como una **capa transversal**.

| Módulo      | Qué recibe desde Administración            |
| ----------- | ------------------------------------------ |
| Inventarios | Almacenes, permisos, unidades, visibilidad |
| Producción  | Fábricas, roles, estructura operativa      |
| Compras     | Equipos, reglas de aprobación, accesos     |
| Ventas      | Equipos comerciales, permisos, visibilidad |
| Finanzas    | Moneda base, impuestos, reglas globales    |
| Reportes    | Acceso a datos sensibles                   |

---

## Principios clave del módulo

### 1. Gobierno antes que operación

Administración existe para **prevenir errores**, no para corregirlos después.

Decisiones bien tomadas aquí reducen:

- Ajustes manuales
- Reprocesos
- Errores humanos
- Riesgos de seguridad

---

### 2. Separación clara de responsabilidades

Netzo separa explícitamente:

- Ver información
- Ver tipos de datos (costos, stock, fiscales)
- Actuar sobre registros
- Extraer información del sistema

Esto permite crear roles **claros y auditables**.

---

### 3. Configuración primero, datos después

Muchas configuraciones de Administración deben definirse **antes de iniciar operación**:

- Moneda base
- Sistema de unidades
- Estructura de almacenes
- Roles y permisos

::warning
Cambiar configuraciones estructurales con operación activa
puede afectar datos históricos y reportes.
::

---

## ¿Quién debería usar este módulo?

El módulo de Administración está pensado para:

- Administradores del sistema
- Responsables de TI / sistemas
- Dirección de operaciones
- Responsables de control interno

No todos los usuarios deben tener acceso a este módulo.

---

## Cómo avanzar desde aquí

Este overview te da el **mapa general**. :br
A partir de aquí, cada sección profundiza en una parte específica del gobierno del sistema.

### Guías recomendadas

- [Roles y permisos](/administracion/roles)
- [Campos personalizados](/administracion/campos)
- [Entidades operativas](/administracion/entidades)
- [Auditoría y eventos](/monitoreo)

---

## Idea clave para recordar

> **Administración no controla personas, controla reglas.**:br
> Cuando las reglas son claras, la operación fluye sola.
