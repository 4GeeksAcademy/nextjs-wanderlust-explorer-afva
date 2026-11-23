# Plan de implementación: Explorador de experiencias

## 1. Objetivo

Implementar la página Explorador de Wanderlust Explorer de acuerdo con `spec.md`, reutilizando el dataset, los tipos y los componentes existentes.

La implementación se realizará de forma incremental, validando cada bloque funcional antes de continuar.

## 2. Contexto técnico

- **Framework:** Next.js con App Router.
- **Lenguaje:** TypeScript.
- **Interfaz:** React y Tailwind CSS.
- **Datos:** `src/data/experiences.ts`.
- **Tipos:** interfaz `Experience` existente.
- **Ruta:** `/experiences`.

## 3. Estrategia de implementación

### Fase 1. Análisis del código existente

Inspeccionar:

- `src/data/experiences.ts`.
- El archivo donde esté definida la interfaz `Experience`.
- `src/app/experiences/page.tsx`, si existe.
- Componentes reutilizables existentes.
- Hooks existentes.
- `src/app/layout.tsx` y estilos compartidos.

Determinar:

- Si el dataset contiene exactamente 100 experiencias.
- Si los datos y tipos son compatibles con los requisitos.
- Qué componentes y funcionalidades ya están implementados.
- Qué archivos será necesario crear o modificar.
- Qué dependencias existen con otras páginas.

No modificar ni regenerar los datos durante esta fase.

Si no es posible verificar el dataset o se detectan incompatibilidades, informar antes de continuar.

### Fase 2. Catálogo de experiencias

Implementar o reutilizar:

- La ruta `/experiences`.
- El componente `ExperienceCard`.
- La cuadrícula responsiva de experiencias.
- La representación de los datos disponibles.

Comprobar que, sin filtros activos, se muestran las 100 experiencias.

No duplicar los datos ni crear fuentes alternativas.

### Fase 3. Búsqueda y filtros

Implementar o reutilizar:

- El componente `SearchBar`.
- El componente `FilterBar`.
- La búsqueda por título mediante regex case-insensitive.
- El filtro de categoría.
- El filtro de destino.
- La combinación de los tres criterios.

Encapsular la lógica de filtrado en un custom hook, por ejemplo `useExperiences` o `useFilters`, según la arquitectura existente.

El nombre definitivo y la ubicación del hook se decidirán tras inspeccionar el proyecto.

### Fase 4. Sincronización con la URL

Integrar:

- `useSearchParams` para consultar los parámetros de búsqueda.
- `usePathname` para trabajar con la ruta actual.
- Los mecanismos de navegación de Next.js necesarios para actualizar los parámetros de la URL.

Comprobar que:

- Los cambios en búsqueda y filtros se reflejan en la URL.
- Los parámetros existentes se recuperan al acceder a la página.
- Los controles muestran los valores recuperados.
- Los resultados corresponden a los parámetros activos.

Evitar duplicar innecesariamente el estado de los filtros cuando pueda derivarse de la URL.

### Fase 5. Estados de interfaz

Verificar:

- Visualización del catálogo sin filtros.
- Visualización de resultados filtrados.
- Mensaje "No se encontraron resultados" cuando no existen coincidencias.
- Diseño responsivo en móvil y escritorio.
- Coherencia con la identidad visual existente.

### Fase 6. Validación

Comprobar:

- Renderizado de la ruta `/experiences`.
- Número de experiencias mostradas sin filtros.
- Búsqueda por título sin distinción entre mayúsculas y minúsculas.
- Funcionamiento independiente de cada filtro.
- Combinación de búsqueda, categoría y destino.
- Sincronización de los parámetros con la URL.
- Recuperación de filtros al abrir una URL prefiltrada.
- Comportamiento sin resultados.
- Ausencia de errores y regresiones.

Ejecutar las comprobaciones disponibles del proyecto, incluyendo lint y build cuando corresponda.

## 4. Archivos afectados

### Archivos existentes que deben inspeccionarse

- `src/data/experiences.ts`.
- Archivo que contiene la interfaz `Experience`.
- `src/app/layout.tsx`.
- `src/app/experiences/page.tsx`, si existe.
- Componentes, hooks y estilos compartidos relevantes.

### Archivos que podrían crearse

Según los resultados de la inspección:

- `src/app/experiences/page.tsx`.
- `src/components/experience-card.tsx`.
- `src/components/search-bar.tsx`.
- `src/components/filter-bar.tsx`.
- Un custom hook de filtrado en `src/hooks/`.

Los nombres y ubicaciones son propuestas técnicas, no requisitos oficiales de estructura.

### Archivos que podrían modificarse

Pendientes de determinar tras la inspección.

Cualquier modificación de componentes compartidos deberá justificarse y aprobarse previamente.

## 5. Dependencias con otras funcionalidades

### Home

El botón de la Home debe navegar a `/experiences`.

### Detalle de experiencia

Las tarjetas deberán poder integrarse con la ruta `/experiences/[id]`.

La implementación de la página de detalle pertenece a `03-experience-detail`.

### Favoritos

El componente `ExperienceCard` deberá permitir su integración posterior con el estado compartido de favoritos.

La implementación del estado compartido y su conexión con las tarjetas pertenece a `04-favorites`.

### Navbar

La navegación global se reutilizará si ya está implementada.

No se crearán componentes de navegación duplicados.

## 6. Restricciones

- Seguir `AGENTS.md`.
- Utilizar `specs/requirements.md` como referencia de requisitos oficiales.
- Respetar `rules/coding.md` y `docs/architecture.md`.
- No modificar ni regenerar el dataset sin aprobación.
- No modificar la interfaz `Experience` sin aprobación.
- No añadir dependencias externas innecesarias.
- No implementar funcionalidades de otras páginas.
- No introducir paginación, ordenación ni llamadas a APIs externas.
- No realizar commits ni push sin autorización expresa.

## 7. Actualización documental

Tras implementar y validar:

- Actualizar `specs/02-explorer/task.md`.
- Actualizar `memory-bank/progress.md`.
- Actualizar `memory-bank/decisions.md` únicamente cuando existan decisiones técnicas o arquitectónicas nuevas.
- Actualizar `docs/architecture.md` únicamente si se producen cambios arquitectónicos relevantes.

## 8. Estado del plan

**Pendiente de inspección del código existente y aprobación de los cambios necesarios.**