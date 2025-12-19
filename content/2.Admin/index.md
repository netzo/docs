---
title: Administración
description: Configuración global de la organización, usuarios, permisos, entidades y personalización del sistema Netzo.
---

# Administración

El módulo de **Administración** concentra todas las **configuraciones estructurales** de Netzo. :br
Aquí no se ejecutan operaciones del día a día; aquí se define **cómo puede operar todo el sistema**.

En términos simples:

- Si otros módulos registran *lo que pasa*,
- Administración define *las reglas bajo las cuales puede pasar*.

Desde este módulo se gobierna:

- El comportamiento global de la aplicación
- La estructura organizacional
- Los accesos y permisos
- La forma en que Netzo se adapta a la operación real de cada empresa

::note
Este módulo está pensado para administradores del sistema. 
Los cambios realizados aquí impactan **toda la organización y todos los módulos**.

:br
::

---

## Alcance del módulo

Administración concentra configuraciones **transversales**, es decir, ajustes que no pertenecen a un solo módulo, sino que afectan a varios o a todo el sistema.

| Área             | ¿Qué se define aquí?               | Impacto          |
| ---------------- | ---------------------------------- | ---------------- |
| Organización     | Branding, región, formatos, moneda | Global           |
| Usuarios y roles | Quién puede hacer qué              | Seguridad        |
| Módulos          | Accesos y permisos                 | Flujo operativo  |
| Entidades        | Estructura real del negocio        | Operación diaria |
| Auditoría        | Registro de eventos                | Trazabilidad     |

::note
Piensa en Administración como el **marco de reglas** sobre el cual operan Inventarios, Producción, Ventas y Finanzas.
::

---

## General

### Organización

La sección **Organización** define las **preferencias base** del sistema. :br
Todo lo que se configure aquí se **hereda automáticamente** en los demás módulos.

Estas decisiones deben tomarse **antes de iniciar operación**, ya que afectan datos históricos, valuaciones y reportes.

---

#### Identidad y branding

Aquí defines **cómo se presenta Netzo** a los usuarios de tu organización.

Esto no es solo visual: una identidad clara ayuda a que los usuarios reconozcan el entorno correcto y reduzcan errores.

| Configuración    | ¿Qué controla?                     |
| ---------------- | ---------------------------------- |
| Nombre comercial | Identidad visible en la aplicación |
| Logotipo         | Representación visual              |
| Color primario   | Identidad visual consistente       |
| Apariencia       | Experiencia de usuario             |

---

#### Región e idioma

Estas opciones definen el **contexto cultural y geográfico** del sistema.

Afectan formatos, idioma de la interfaz y comportamiento general.

| Configuración        | Impacta en                  |
| -------------------- | --------------------------- |
| País / región        | Reglas fiscales y formatos  |
| Zona horaria         | Fechas, eventos y auditoría |
| Idioma principal     | Interfaz del sistema        |
| Idiomas de contenido | Catálogos y textos          |

---

#### Formatos

Los formatos determinan **cómo se muestran los datos** a los usuarios. :br
Un formato incorrecto puede generar confusión o errores de interpretación.

| Elemento | Ejemplo                      |
| -------- | ---------------------------- |
| Fecha    | DD/MM/YYYY                   |
| Hora     | 24 h / 12 h                  |
| Números  | Separador decimal y de miles |
| Texto    | Convenciones de escritura    |

---

#### Finanzas e impuestos

Aquí se establecen las **reglas financieras globales** del sistema. :br
Estas configuraciones son críticas porque afectan costos, inventarios y reportes.

| Configuración       | Significado operativo               |
| ------------------- | ----------------------------------- |
| Moneda principal    | Base de valorización del inventario |
| Monedas secundarias | Operación multi-moneda              |
| Impuestos           | Cálculo fiscal                      |
| Redondeo            | Precisión financiera                |

::warning
Cambiar configuraciones financieras puede afectar reportes, costos y valuaciones existentes.
::

---

#### Sistema de unidades

Define el **sistema de medición** utilizado en toda la aplicación. :br
Debe ser consistente con la operación real de la empresa.

| Opción   | Uso típico              |
| -------- | ----------------------- |
| Métrico  | Manufactura e industria |
| Imperial | Operación internacional |

---

#### Documentos PDF

Estas configuraciones controlan la **generación de documentos oficiales** como órdenes, remisiones o facturas.

| Elemento         | Uso                   |
| ---------------- | --------------------- |
| Plantillas       | Documentos oficiales  |
| Encabezado / pie | Identidad legal       |
| Folios           | Control documental    |
| Leyendas         | Información normativa |

::caution
Cambiar la moneda base de la organización puede afectar valuaciones históricas :br
y no debe hacerse una vez iniciada la operación.
::

---

## Usuarios

### Miembros

::badge
**Próximamente**
::

Esta sección permitirá administrar **a todas las personas que operan Netzo** desde un solo lugar.

| Aspecto   | Descripción          |
| --------- | -------------------- |
| Estado    | Activo / inactivo    |
| Roles     | Conjunto de permisos |
| Accesos   | Módulos habilitados  |
| Actividad | Auditoría de uso     |

---

### Invitaciones

::badge
**Próximamente**
::

Desde aquí se controlará el **ingreso de nuevos usuarios** al sistema.

| Acción      | Propósito                |
| ----------- | ------------------------ |
| Enviar      | Integrar nuevos usuarios |
| Asignar rol | Control inicial          |
| Revocar     | Seguridad                |
| Monitorear  | Seguimiento              |

---

## Campos personalizados

Los campos personalizados permiten **extender el modelo de datos** sin modificar el núcleo del sistema.

Son una herramienta poderosa, pero deben usarse con criterio.

| Capacidad    | ¿Para qué sirve?           |
| ------------ | -------------------------- |
| Tipo de dato | Texto, número, fecha, enum |
| Validaciones | Calidad de datos           |
| Visibilidad  | Control por rol            |
| Permisos     | Seguridad                  |

::tip
Usa campos personalizados solo cuando el dato no forme parte del modelo estándar :br
y sea realmente necesario para la operación.
::

---

## Módulos

Desde esta sección se define **quién puede acceder a cada módulo** :br
y **qué acciones puede realizar dentro de él**.

Es importante entender que **acceso no significa permiso total**.

---

### Datos Maestros

Controla quién puede modificar la información base del sistema.

| Permiso        | Alcance          |
| -------------- | ---------------- |
| Crear / editar | Catálogos        |
| Aprobar        | Cambios críticos |
| Validar        | Consistencia     |

---

### Inventario

Define los permisos operativos del módulo más sensible del sistema.

| Acción             | Nivel de control       |
| ------------------ | ---------------------- |
| Entradas / salidas | Operación              |
| Transferencias     | Movimiento interno     |
| Ajustes            | Requieren autorización |
| Conteos físicos    | Conciliación           |

::warning
Permitir ajustes de inventario sin control compromete la trazabilidad.
::

---

### Reportes

Permite controlar quién puede acceder a información sensible.

| Permiso          | Riesgo               |
| ---------------- | -------------------- |
| Ver costos       | Información sensible |
| Exportar         | Control de datos     |
| Compartir vistas | Gobernanza           |

::note
Tener acceso a un módulo no implica acceso a toda su información.
::

---

## Entidades

Las **entidades** representan la estructura real del negocio :br
y determinan cómo operan los módulos en la práctica.

---

### Empresas (fiscales)

Definen el marco legal y fiscal de la operación.

| Elemento       | Uso            |
| -------------- | -------------- |
| Datos fiscales | Facturación    |
| Impuestos      | Cálculo fiscal |
| Folios         | Control legal  |

---

### Equipos de compras y ventas

Permiten **segmentar la operación** por región, zona o función.

| Equipo  | Función                           |
| ------- | --------------------------------- |
| Compras | Aislar proveedores y aprobaciones |
| Ventas  | Control comercial y visibilidad   |

---

### Fábricas

Representan las plantas productivas y afectan directamente Producción.

| Impacto             | Módulo     |
| ------------------- | ---------- |
| Órdenes y procesos  | Producción |
| Flujo de materiales | Inventario |

---

### Almacenes

Definen la estructura logística del sistema.

| Configuración    | Impacta         |
| ---------------- | --------------- |
| Tipo             | Flujo logístico |
| Zonas            | Control interno |
| Permisos         | Seguridad       |
| Reabastecimiento | Planeación      |

::tip
Define la estructura de almacenes antes de iniciar operación para evitar reprocesos.
::

---

## Monitoreo

El monitoreo permite **entender qué pasó, cuándo y quién lo hizo**.

| Herramienta | Uso                 |
| ----------- | ------------------- |
| Auditoría   | Cambios por usuario |
| Eventos     | Trazabilidad        |
| Diagnóstico | Soporte             |

::note
Netzo es un sistema orientado a eventos. :br
Cada acción relevante queda registrada y auditada.
::

---

## Buenas prácticas

| Recomendación        | Motivo        |
| -------------------- | ------------- |
| Acceso limitado      | Seguridad     |
| Roles claros         | Menos errores |
| Cambios documentados | Control       |
| Auditoría frecuente  | Confianza     |

---

## Continuar

- [Procesos atómicos](/procesos)
- [Roles y permisos](/seguridad)
- [Inventarios y WMS](/inventario)
