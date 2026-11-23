# Plan de implementación: Perfil de usuario

## 1. Objetivo

Implementar la página `/profile` de Wanderlust Explorer, mostrando un usuario simulado y un contador conectado al estado compartido de favoritos.

La implementación debe reutilizar los componentes, estilos y mecanismos de estado existentes.

## 2. Contexto técnico

- **Framework:** Next.js con App Router.
- **Lenguaje:** TypeScript.
- **Interfaz:** React y Tailwind CSS.
- **Ruta:** `/profile`.
- **Estado de favoritos:** `useState` compartido implementado en `04-favorites`.
- **Datos del perfil:** información ficticia y estática.

## 3. Estrategia de implementación

### Fase 1. Análisis del código existente

Inspeccionar:

- `src/app/profile/page.tsx`, si existe.
- `src/app/layout.tsx`.
- La implementación del estado compartido de favoritos.
- Los componentes y hooks utilizados en `04-favorites`.
- Los componentes de navegación existentes.
- Los estilos compartidos.

Determinar:

- Si existe una implementación parcial del Perfil.
- Cómo acceder al estado compartido de favoritos.
- Qué componentes pueden reutilizarse.
- Qué archivos será necesario crear o modificar.
- Si existen dependencias pendientes con `04-favorites`.

No modificar archivos durante esta fase.

### Fase 2. Definición de la información simulada

Definir los datos ficticios que se mostrarán en el Perfil.

Como propuesta mínima de presentación:

- Nombre ficticio del usuario.
- Una breve descripción o información básica del perfil.

Estos campos no constituyen requisitos específicos del enunciado oficial.

La información debe ser estática y no requerir almacenamiento ni servicios externos.

No implementar formularios de edición.

### Fase 3. Implementación de la página

Crear o completar:

- `src/app/profile/page.tsx`.

La página debe:

- Mostrar la información del usuario simulado.
- Mantener coherencia con el sistema de diseño existente.
- Integrarse con la navegación global.
- Adaptarse a dispositivos móviles y de escritorio.

Reutilizar componentes existentes siempre que sea posible.

### Fase 4. Integración del contador de favoritos

Conectar la página al estado compartido implementado en `04-favorites`.

La implementación debe:

- Obtener los identificadores de las experiencias favoritas.
- Calcular el número de favoritos a partir de dichos identificadores.
- Mostrar el resultado en el Perfil.
- Reflejar los cambios realizados desde otras páginas.

No crear un segundo estado de favoritos ni mantener un contador independiente.

La integración concreta dependerá de la arquitectura existente y deberá respetar las decisiones aprobadas en `04-favorites`.

### Fase 5. Integración con la navegación

Verificar:

- Acceso a `/profile` mediante la navegación existente.
- Presencia de la `Navbar`.
- Identificación visual de la ruta activa.
- Navegación sin recarga completa.
- Conservación del estado de favoritos durante la navegación.

No crear componentes de navegación duplicados.

### Fase 6. Validación

Comprobar:

- Funcionamiento de la ruta `/profile`.
- Visualización del perfil simulado.
- Visualización del contador de favoritos.
- Contador igual a cero cuando no hay favoritos.
- Actualización del contador al marcar experiencias.
- Actualización del contador al desmarcar experiencias.
- Coherencia con el número de experiencias mostrado en `/favorites`.
- Comportamiento responsivo.
- Ausencia de errores y regresiones.

Ejecutar las comprobaciones disponibles del proyecto, incluyendo lint y build cuando corresponda.

## 4. Archivos afectados

### Archivos existentes que deben inspeccionarse

- `src/app/profile/page.tsx`, si existe.
- `src/app/layout.tsx`.
- Componentes y hooks relacionados con favoritos.
- Componentes de navegación.
- Archivos de estilos compartidos.

### Archivos que podrían crearse

- `src/app/profile/page.tsx`, si todavía no existe.

### Archivos que podrían modificarse

- `src/app/profile/page.tsx`.
- Archivos compartidos estrictamente necesarios para conectar el Perfil con el estado de favoritos.

Las modificaciones definitivas deberán identificarse tras la inspección.

## 5. Dependencias con otras funcionalidades

### Favoritos

El Perfil depende del estado compartido definido en `04-favorites`.

No debe duplicarse la lógica de gestión de favoritos.

Si dicha funcionalidad todavía no está implementada, se deberá registrar la dependencia antes de continuar.

### Explorador

El Explorador permite marcar y desmarcar experiencias.

Los cambios deben reflejarse en el contador del Perfil mediante el estado compartido.

No se modificará la lógica de búsqueda ni filtrado.

### Navbar

Se reutilizará la navegación global existente para acceder a `/profile`.

No se crearán componentes de navegación duplicados.

## 6. Restricciones

- Seguir las instrucciones de `AGENTS.md`.
- Utilizar `specs/requirements.md` como referencia de requisitos oficiales.
- Respetar `rules/coding.md` y `docs/architecture.md`.
- No implementar autenticación ni registro.
- No implementar edición del perfil.
- No utilizar datos personales reales.
- No crear un estado de favoritos independiente.
- No utilizar `localStorage`.
- No instalar dependencias externas innecesarias.
- No modificar el dataset ni la interfaz `Experience`.
- No realizar commits ni push sin autorización expresa.

## 7. Actualización documental

Tras implementar y validar:

- Actualizar `specs/05-profile/task.md`.
- Actualizar `memory-bank/progress.md`.
- Registrar nuevas decisiones en `memory-bank/decisions.md`, cuando corresponda.
- Actualizar `docs/architecture.md` únicamente si existen cambios arquitectónicos relevantes.

## 8. Estado del plan

**Pendiente de inspección del código existente y aprobación de los cambios necesarios.**