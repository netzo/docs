---
title: Roles y permisos
description: Guía para crear roles en Netzo y definir permisos de forma clara, segura y escalable.
---

# Roles y permisos

En Netzo, los **roles** son el mecanismo principal para gobernar **qué puede hacer cada usuario** dentro del sistema.

Un rol **no representa una persona ni un puesto**. :br
Representa un **conjunto de capacidades** que luego se asigna a uno o más usuarios.

Diseñar correctamente los roles permite:

- Reducir errores operativos
- Separar responsabilidades
- Proteger información sensible
- Mantener trazabilidad y control
- Escalar el sistema sin fricción

::note
Netzo separa de forma explícita **ver información**, **ver tipos de datos** y
**actuar sobre los registros**. 
Un usuario puede ver un registro sin poder modificarlo, o modificarlo sin poder aprobarlo.

:br
::

---

## Dónde se crean los roles

Los roles se administran desde el módulo de **Administración**. :br
Pueden asignarse posteriormente a usuarios y aplicarse por módulo o por entidad.

---

## Crear un rol

Al crear un rol, Netzo organiza los permisos en **bloques conceptuales**.
Esto evita configuraciones confusas y ayuda a razonar los permisos como decisiones reales.

---

## Información general del rol

Esta sección define la **identidad y propósito** del rol.

| Campo       | Descripción                    | Recomendación                                       |
| ----------- | ------------------------------ | --------------------------------------------------- |
| Etiqueta    | Nombre visible del rol         | Usa nombres por función real (*Almacén – Operador*) |
| Color       | Identificador visual           | Ayuda a distinguir roles rápidamente                |
| Descripción | Qué puede y qué no puede hacer | Sé explícito y concreto                             |

::tip
Un rol bien nombrado reduce errores: el usuario entiende su alcance sin tener que adivinar.
::

---

## Modelo de permisos en Netzo

Antes de asignar permisos, es importante entender el modelo mental.

**Netzo divide los permisos en cuatro capas independientes:**

1. **Ver** → Acceso al registro
2. **Campos** → Qué tipo de información puede ver
3. **Acciones sobre registros** → Qué puede hacer con los datos
4. **Acciones de salida** → Qué información puede extraer del sistema

Cada capa cumple un propósito distinto y no depende automáticamente de las demás.

---

## Permisos de visualización (Ver)

Estos permisos controlan el **acceso base** a los registros del módulo.

| Permiso                    | Qué habilita                      |
| -------------------------- | --------------------------------- |
| Ver: Registro              | Acceder al registro y a sus rutas |
| Ver: Archivos del registro | Ver archivos adjuntos             |
| Ver: Notas del registro    | Ver notas internas                |

::warning
Si un rol **no tiene** el permiso **Ver: Registro**, 
ningún otro permiso tendrá efecto.

:br
::

---

## Permisos por tipo de campo

Ver un registro **no implica ver toda su información**. :br
Netzo permite controlar **qué categorías de datos** son visibles para cada rol.

| Tipo de campo  | Uso típico                      |
| -------------- | ------------------------------- |
| Metadatos      | Auditoría, fechas, autor        |
| Finanzas       | Costos, precios, transacciones  |
| Datos fiscales | RFC, direcciones de facturación |
| Stock          | Existencias e inventario        |
| Estadísticos   | Sumas, promedios                |
| Configuración  | Campos internos del sistema     |

::note
Este diseño permite, por ejemplo, que un operador vea una orden 
pero **no vea costos ni precios**.

:br
::

---

## Acciones sobre registros

Las **acciones sobre registros** definen **qué puede hacer un usuario con la información**,
más allá de solo verla.

Aquí se controla si un usuario puede:

- Crear información nueva
- Modificar datos existentes
- Avanzar o cerrar flujos
- Aprobar, bloquear o deshabilitar registros

| Acción       | Significado operativo                      |
| ------------ | ------------------------------------------ |
| Crear        | Generar nuevos registros                   |
| Modificar    | Editar registros existentes                |
| Eliminar     | Borrado permanente del registro            |
| Archivar     | Ocultar registros sin eliminarlos          |
| Desarchivar  | Restaurar registros archivados             |
| Bloquear     | Inhabilitar temporalmente un registro      |
| Desbloquear  | Habilitar nuevamente un registro bloqueado |
| Aprobar      | Disparar acciones internas del sistema     |
| Cerrar       | Marcar un flujo como completado            |
| Publicar     | Hacer visible un registro externamente     |
| Habilitar    | Activar un registro                        |
| Deshabilitar | Desactivar un registro sin eliminarlo      |

::warning
Otorga permisos como **Eliminar** o **Aprobar** solo a roles bien definidos
y con responsabilidad clara.
::

---

## Acciones de salida de información

Estas acciones controlan **la extracción de información fuera del sistema**.

| Acción    | Qué permite                        | Riesgo asociado               |
| --------- | ---------------------------------- | ----------------------------- |
| Descargar | Obtener archivos o documentos      | Pérdida de control documental |
| Exportar  | Extraer datos en formatos externos | Fuga de información sensible  |

::note
Un usuario puede operar completamente el sistema
sin necesidad de permisos de exportación.
::

---

## Cómo definir buenos roles

Antes de crear un rol, responde estas preguntas:

1. ¿Qué **decisiones reales** toma esta persona?
2. ¿Qué errores **no puede permitirse** cometer?
3. ¿Qué información **no necesita ver**?
4. ¿Debe **aprobar** o solo **ejecutar**?

Diseñar roles es una decisión organizacional, no solo técnica.

---

## Ejemplos de roles bien diseñados

| Rol                   | Características                                         |
| --------------------- | ------------------------------------------------------- |
| Almacén – Operador    | Ver stock, crear movimientos, **sin ver costos**        |
| Compras – Analista    | Crear órdenes, **sin aprobar**                          |
| Compras – Autorizador | Aprobar órdenes, sin crear                              |
| Ventas – Ejecutivo    | Ver precios, crear cotizaciones                         |
| Finanzas              | Ver costos, exportar información, sin operar inventario |

---

## Buenas prácticas

- Diseña roles **pequeños y claros**
- Evita roles “todopoderosos”
- Separa **ejecución** de **aprobación**
- Documenta el propósito de cada rol
- Revisa permisos periódicamente

---

## Continuar

- [Administración](/administracion)
- [Campos personalizados](/administracion/campos)
- [Auditoría y eventos](/monitoreo)
