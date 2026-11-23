# Plan de implementación: Favoritos

## 1. Objetivo

Implementar la gestión compartida de favoritos y la página `/favorites`, reutilizando los datos, tipos y componentes existentes.

La implementación debe permitir marcar y desmarcar experiencias desde las tarjetas y consultar la selección desde diferentes páginas.

## 2. Contexto técnico

- **Framework:** Next.js con App Router.
- **Lenguaje:** TypeScript.
- **Interfaz:** React y Tailwind CSS.
- **Datos:** `src/data/experiences.ts`.
- **Tipos:** interfaz `Experience` existente.
- **Estado:** `useState` nativo de React.
- **Ruta:** `/favorites`.

## 3. Estrategia de implementación

### Fase 1. Análisis del código existente

Inspeccionar:

- `src/data/experiences.ts`.
- La interfaz `Experience`.
- `src/app/layout.tsx`.
- `src/app/experiences/page.tsx`, si existe.
- `src/app/favorites/page.tsx`, si existe.
- El componente `ExperienceCard`, si existe.
- Los hooks y componentes compartidos existentes.
- La navegación y los estilos actuales.

Determinar:

- Si ya existe lógica de favoritos.
- Si las tarjetas incorporan un icono de corazón.
- Dónde se gestiona actualmente el estado.
- Qué componentes necesitan recibir el estado y sus funciones.
- Qué archivos será necesario crear o modificar.

No modificar archivos durante esta fase.

### Fase 2. Definición del estado compartido

Implementar o reutilizar un estado React que contenga los identificadores de las experiencias favoritas.

La gestión debe permitir:

- Consultar si una experiencia es favorita.
- Añadir una experiencia a favoritos.
- Eliminar una experiencia de favoritos.
- Compartir el estado con las páginas y componentes necesarios.

El estado debe situarse en un nivel de la aplicación que permita conservarlo durante la navegación entre el Explorador y Favoritos.

Como propuesta técnica, se podrá utilizar un componente cliente compartido desde el layout para alojar el `useState`.

La solución concreta se determinará tras inspeccionar la arquitectura existente.

No utilizar `localStorage` ni bibliotecas externas de gestión de estado.

### Fase 3. Integración con ExperienceCard

Modificar o reutilizar `ExperienceCard` para:

- Mostrar un icono de corazón.
- Recibir mediante props el estado de favorito.
- Recibir mediante props la función para cambiar ese estado.
- Reflejar visualmente si la experiencia está marcada.
- Permitir marcarla o desmarcarla.

Mantener el resto del comportamiento existente de la tarjeta.

Si la tarjeta permite navegar al detalle, comprobar que la interacción con el corazón no provoca una navegación involuntaria.

### Fase 4. Implementación de la página Favoritos

Crear o completar:

- `src/app/favorites/page.tsx`.

La página debe:

- Acceder al estado compartido.
- Obtener del dataset las experiencias cuyos IDs estén marcados.
- Mostrar únicamente esas experiencias.
- Reutilizar `ExperienceCard`.
- Permitir desmarcar experiencias desde la propia página.

Cuando no existan favoritos, mostrar un estado vacío sencillo y coherente con el diseño existente.

### Fase 5. Integración entre páginas

Verificar:

- Selección de favoritos desde el Explorador.
- Visualización de las experiencias seleccionadas en `/favorites`.
- Eliminación de favoritos desde `/favorites`.
- Actualización del icono en las tarjetas.
- Conservación del estado durante la navegación entre páginas.

La página `/profile` utilizará posteriormente el mismo estado para mostrar el contador de favoritos.

No implementar todavía el Perfil.

### Fase 6. Validación

Comprobar:

- Funcionamiento de la ruta `/favorites`.
- Activación y desactivación del corazón.
- Correspondencia entre los IDs guardados y las experiencias mostradas.
- Sincronización del estado entre páginas.
- Funcionamiento de la lista vacía.
- Ausencia de duplicados en la selección de favoritos.
- Comportamiento responsivo.
- Ausencia de errores y regresiones.

Ejecutar las comprobaciones disponibles del proyecto, incluyendo lint y build cuando corresponda.

## 4. Archivos afectados

### Archivos existentes que deben inspeccionarse

- `src/data/experiences.ts`.
- Archivo que contiene la interfaz `Experience`.
- `src/app/layout.tsx`.
- `src/app/experiences/page.tsx`.
- `src/app/favorites/page.tsx`, si existe.
- Componente `ExperienceCard`, si existe.
- Hooks y componentes compartidos relevantes.

### Archivos que podrían crearse

Según los resultados de la inspección:

- `src/app/favorites/page.tsx`.
- Un componente cliente para alojar el estado compartido.
- Un custom hook para facilitar el acceso a la lógica de favoritos, si resulta necesario.

Los nombres y ubicaciones definitivos se determinarán tras revisar la arquitectura existente.

### Archivos que podrían modificarse

- `src/app/layout.tsx`, para integrar el estado compartido si fuera necesario.
- `src/app/experiences/page.tsx`, para conectar las tarjetas con el estado.
- `ExperienceCard`, para incorporar el comportamiento del corazón.
- Archivos compartidos estrictamente necesarios para la integración.

Toda modificación deberá identificarse y aprobarse previamente.

## 5. Dependencias con otras funcionalidades

### Explorador

El Explorador contiene las tarjetas desde las que el usuario puede marcar experiencias como favoritas.

Se reutilizará el componente `ExperienceCard` existente.

### Detalle de experiencia

La página de detalle debe conservar su comportamiento actual.

No se añadirá gestión de favoritos al detalle salvo que exista un requisito aprobado para ello.

### Perfil

El Perfil necesita conocer el número de favoritos guardados.

La implementación actual deberá permitir reutilizar posteriormente el estado compartido sin duplicarlo.

### Navbar

Se reutilizará la navegación global existente para acceder a `/favorites`.

No se crearán componentes de navegación duplicados.

## 6. Restricciones

- Seguir `AGENTS.md`.
- Utilizar `specs/requirements.md` como referencia de requisitos oficiales.
- Respetar `rules/coding.md` y `docs/architecture.md`.
- No modificar ni regenerar el dataset.
- No modificar la interfaz `Experience` sin aprobación.
- No instalar bibliotecas externas de gestión de estado.
- No utilizar `localStorage`.
- No implementar autenticación ni persistencia.
- No desarrollar la página de Perfil.
- No realizar commits ni push sin autorización expresa.

## 7. Actualización documental

Tras implementar y validar:

- Actualizar `specs/04-favorites/task.md`.
- Actualizar `memory-bank/progress.md`.
- Registrar nuevas decisiones técnicas en `memory-bank/decisions.md` cuando corresponda.
- Actualizar `docs/architecture.md` únicamente si se producen cambios arquitectónicos relevantes.

## 8. Estado del plan

**Pendiente de inspección del código existente y aprobación de los cambios necesarios.**