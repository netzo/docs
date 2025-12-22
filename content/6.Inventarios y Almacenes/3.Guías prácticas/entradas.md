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


## Tipos de entrada

El tipo de entrada **dependera del origen real del inventario**.
Cada tipo de entrada determina **qué información se solicita** y **qué procesos se conectan** automáticamente.

:::card-group

  :::card
  ---
  title: Entradas de proveedores
  icon: i-mdi-cart-arrow-down
  ---
  Úsala cuando la mercancía **proviene de un proveedor externo**, normalmente como resultado de una compra.

  **Cuándo usarla:**
  - Recepciones derivadas de órdenes de compra
  - Compras directas sin orden previa (casos controlados)

  **Campos distintivos:**
  - Proveedor
  - Orden de compra (opcional pero recomendado)
  - Sucursal del proveedor (opcional)

  :::

  :::card
  ---
  title: Entradas de producción
  icon: i-mdi-factory
  ---
  Úsala cuando **Producción libera producto** hacia el almacén.

  **Cuándo usarla:**
  - Producto terminado
  - Semielaborados (Componentes)
  - Subproductos definidos

  **Campos distintivos:**
  - Fábrica de origen
  - Orden de producción
  - Lotes o corridas productivas
  :::

  :::card
  ---
  title: Traspasos entre almacenes
  icon: i-mdi-swap-horizontal
  ---
  Úsala cuando el inventario **proviene de otro almacén interno**.

 **Cuándo usarla:**
  - Traslados de producto terminado
  - Traslados de materia prima

  **Campos distintivos:**
  - Almacén de origen
  - Almacén de destino (el actual)
  - Solicitud o remisión de traspaso

  :::

  :::card
  ---
  title: Devoluciones de clientes
  icon: i-mdi-keyboard-return
  ---
  Úsala cuando un cliente **devuelve mercancía previamente vendida**.

  **Cuándo usarla:**
  - Rechazos
  - Devoluciones comerciales
  - Garantías

  **Campos distintivos:**
  - Cliente
  - Orden de venta relacionada
  - Motivo de devolución
  :::

:::

## Guia visual



---

## Pasos generales

::steps{level="4"}

#### Ve a **Inventarios → Almacenes → (Selecciona un almacén) → Entradas de mercancía**

Haz clic en **Crear** y selecciona el **tipo de entrada** según el origen real del inventario
(proveedor, producción, devolución o traspaso).

Al crear la entrada, **ábrela haciendo clic en su nombre** para comenzar a trabajar con sus partidas.

:::tip
Si dejas el nombre vacío, el sistema generará uno automáticamente con base en la fecha.
:::

---

Dentro de una **entrada de mercancía**, el registro de partidas se divide en **cuatro pestañas**.
Cada pestaña corresponde a un momento específico del proceso.

::card-group

  :::card
  ---
  title: Planificación
  icon: i-mdi-clipboard-text-outline
  ---
  Aquí defines **qué artículos se esperan recibir**.

  **Úsala para:**
  - Agregar artículos
  - Revisar artículos cargados automáticamente
  - Confirmar cantidades planeadas
  :::

  :::card
  ---
  title: Ejecución
  icon: i-mdi-truck-check-outline
  ---
  Aquí registras **lo que realmente ingresó al almacén**.

  **En esta pestaña:**
  - Capturas cantidades reales
  - Ajustas diferencias contra lo planeado
  :::

  :::card
  ---
  title: Resumen
  icon: i-mdi-table-check
  ---
  Vista final de control, disponible una vez que has **aprobado** la entrada.

  **Permite:**
  - Comparar planeado vs ejecutado
  - Revisar totales
  - Validar la entrada antes de cerrarla
  :::

  :::card
  ---
  title: Notas y archivos
  icon: i-mdi-paperclip
  ---
  Espacio para **documentar y respaldar** la entrada.

  **Úsala para:**
  - Agregar observaciones
  - Adjuntar documentos relacionados, fotografías o comprobantes
  :::

::


#### **Planificación** (carga de artículos)

Esta pestaña define **qué artículos deberían ingresar al almacén**.

::warning
Este paso **solo es obligatorio cuando la carga es manual**.
Si los artículos se cargan automáticamente, **solo debes verificar la información**.
::

::tabs{.w-full}

  :::tabs-item{icon="i-mdi-pencil" label="Carga manual"}
  Cuando la entrada **no está vinculada a una orden de origen**, deberás
  **agregar los artículos manualmente**.

  En este caso, define para cada partida:

  - Variante
  - Formato
  - Segmento (cubeta)
  - Cantidad planeada

  ::note
  Esta información representa **lo que el sistema espera recibir**
  antes de validar la entrada física (conteo real).
  ::

  ::steps{level="4"}

    #### Selecciona la forma de captura de ítems

    Al crear una entrada, puedes elegir **cómo agregar los artículos** según el volumen y el tipo de operación.

    :::card-group

      :::card
      ---
      title: Agregar ítems uno por uno
      icon: i-mdi-plus
      ---
      Opción recomendada cuando necesitas **control detallado por línea**.

      **Cuándo usarla:**
      - Pocas variantes
      - Diferentes formatos por artículo
      - Revisión cuidadosa de cantidades, lotes o fechas
      - Capturas manuales o validaciones finas
      :::

      :::card
      ---
      title: Agregar ítems en bloque
      icon: i-mdi-playlist-plus
      ---
      Opción recomendada para **volúmenes altos o recepciones estandarizadas**.

      **Cuándo usarla:**
      - Muchas variantes o líneas
      - Recepciones repetitivas
      - Traspasos o liberaciones masivas
      - Procesos previamente validados
      :::

    :::

    #### Selecciona los ítems y define la cubeta de inventario

    En este paso indicas **qué artículo estás dando de alta** y **en qué cubeta quedará registrado**.

    Completa los siguientes campos:

    - **Variante de producto**
      Selecciona la **variante exacta** que estás recibiendo.
      *(Ejemplo: Canela Molida | Kg)*

    - **Formato**
      Define cómo se registra la entrada:
      - *Individual* (unidad base)
      - *Caja, saco o bobina* con unidades definidas

    - **Segmento (cubeta)**
      Selecciona el estado en el que quedará el inventario:
      - **Disponible** → Listo para uso o venta
      - **Reservado** → Asignado a una orden específica
      - **Retenido** → Bloqueado (revisión, calidad, inspección)

    - **Cantidad planeada**
      Ingresa la cantidad que se dará de alta en el formato seleccionado.

    ::tip
    En la mayoría de los casos, utiliza **Disponible**.
    Usa **Retenido** solo cuando exista una razón operativa clara.
    ::

  :::

  :::tabs-item{icon="i-mdi-database-sync" label="Carga automática"}
  Cuando la entrada proviene de una **orden existente vinculada**
  (orden de compra, producción o traspaso), **los artículos se cargan automáticamente**.

  En este caso, utiliza la pestaña **Planificación** únicamente para **verificar**:

  - Variantes que deben recibirse
  - Cantidades planeadas
  - Formatos y unidades

  ::note
  Si la información es correcta, **no es necesario modificar ni agregar artículos**.
  ::
  :::

::

  #### **Ejecución** (registro de artículos)

  Esta pestaña define **qué artículos registras físicamente** en el almacén. **(Piensa en esto como el conteo definitivo)**.

  Aquí debes **capturar las cantidades reales** que ingresan, comparándolas con la planificación previa. Segun la configuracion de cada producto (proveniente de Datos Maestros), podrás registrar información adicional como:

  - Lote
  - Fechas de caducidad
  - Números de serie
  - Otras características específicas

  ::tip
  El sistema te solicitará automáticamente los campos requeridos según la configuración de cada variante.
  ::


  ::tabs{.w-full}
    :::tabs-item{icon="i-mdi-lightning-bolt" label="Copiar cantidades planeadas"}

    Utiliza el simbolo de rayo ⚡ para **copiar rápidamente los artículos y cantidades planeadas** a la pestaña de ejecución.


    **Que sucede al usar esta opción:**

    - Se crearan las partidas en ejecucion con base en las planeadas.
    - Apeceran campos como "Lote" o "Número de serie" si la variante lo requiere.
    - Veras las columnas **Planeado** y **Recibido** para ingresar las cantidades finales.

    ::tip
    Activa el modo :icon{name="i-mdi-pencil"} "edicion rapida" para facilitar la captura masiva de cantidades.
    ::

    **Procede el conteo físico y captura las cantidades reales** recibidas en el almacén.

    :::

    :::tabs-item{icon="i-mdi-plus" label="Captura manual"}

    Anade manualmente las partidas a la pestaña de ejecucion (Uno a uno o en bloque) y captura las cantidades recibidas.

    ::tip
    Activa el modo :icon{name="i-mdi-pencil"} "edicion rapida" para facilitar la captura masiva de cantidades.
    ::

    **Procede el conteo físico y captura las cantidades reales** recibidas en el almacén.

  ::

## Resultado esperado

Al registrar correctamente una entrada:

- El inventario del almacén **incrementa**
- El movimiento queda **auditado**
- La trazabilidad queda completa
- Otros almacenes **no se ven afectados**

## Cuándo NO crear un registro de entrada

  :::warning
  No utilices entradas para:

  - Simular compras
  - Simular producción
  - Corregir errores recientes
  :::

## Errores comunes

- Registrar la entrada en el almacén incorrecto
- Seleccionar un tipo de entrada equivocado (Despliega un menu distinto)
- Confirmar sin revisar cantidades

  :::tip
  Si algo no cuadra después de una entrada, revisa el historial del almacén antes de hacer ajustes.
  :::