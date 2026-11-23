# Plan de implementación: Detalle de experiencia

## 1. Objetivo

Implementar la página dinámica de detalle de experiencias de Wanderlust Explorer, reutilizando el dataset, los tipos, la navegación y los estilos existentes.

La implementación se realizará de forma incremental y sin introducir funcionalidades ajenas a `spec.md`.

## 2. Contexto técnico

- **Framework:** Next.js con App Router.
- **Lenguaje:** TypeScript.
- **Interfaz:** React y Tailwind CSS.
- **Datos:** `src/data/experiences.ts`.
- **Tipos:** interfaz `Experience` existente.
- **Ruta:** `/experiences/[id]`.

## 3. Estrategia de implementación

### Fase 1. Análisis del código existente

Inspeccionar:

- `src/data/experiences.ts`.
- El archivo que contiene la interfaz `Experience`.
- `src/app/experiences/[id]/page.tsx`, si existe.
- `src/app/experiences/page.tsx`, si existe.
- El componente `ExperienceCard`, si existe.
- `src/app/layout.tsx`.
- Los componentes de navegación y estilos compartidos.

Determinar:

- El tipo y formato de los identificadores utilizados.
- La estructura real de los objetos del dataset.
- Si existe una implementación parcial de la página de detalle.
- Qué componentes pueden reutilizarse.
- Qué archivos será necesario crear o modificar.

No modificar archivos durante esta fase.

Si se detectan incompatibilidades en los datos o tipos, informar antes de proponer cambios.

### Fase 2. Implementación de la ruta dinámica

Crear o completar:

- `src/app/experiences/[id]/page.tsx`.

Utilizar el mecanismo de parámetros de ruta del App Router de Next.js para obtener el identificador solicitado.

La implementación deberá respetar la versión de Next.js instalada y las convenciones existentes del proyecto.

### Fase 3. Obtención de la experiencia

- Importar el dataset local existente.
- Obtener el identificador desde los parámetros de la ruta.
- Buscar la experiencia cuyo `id` corresponda al identificador recibido.
- Reutilizar la interfaz `Experience` para mantener la consistencia de tipos.
- Evitar duplicar datos o mantener copias innecesarias del dataset.

La comparación del identificador deberá adaptarse al tipo real definido en el proyecto.

### Fase 4. Presentación de la información

Mostrar los datos de la experiencia seleccionada:

- Imagen.
- Título.
- Descripción.
- Categoría.
- Destino.
- Precio.
- Valoración.
- Identificador, de acuerdo con el requisito de mostrar la información completa.

Reutilizar los estilos y componentes existentes cuando resulte apropiado.

No crear componentes adicionales salvo que exista una necesidad justificada de reutilización o separación de responsabilidades.

### Fase 5. Gestión de identificadores inexistentes

Como decisión técnica propuesta, utilizar `notFound()` de Next.js cuando el identificador no corresponda a ninguna experiencia del dataset.

Esta solución:

- Evita mostrar información incorrecta.
- Aprovecha el mecanismo de rutas inexistentes del framework.
- No requiere dependencias adicionales.

La decisión deberá confirmarse antes de implementarla.

### Fase 6. Integración con la navegación

Verificar:

- Acceso directo mediante la URL.
- Navegación desde el Explorador cuando esté implementada.
- Presencia de la `Navbar`.
- Coherencia visual con las páginas existentes.

Si es necesario modificar `ExperienceCard` para permitir la navegación al detalle, identificar previamente el cambio y solicitar aprobación.

No modificar el comportamiento de favoritos durante esta fase.

### Fase 7. Validación

Comprobar:

- Funcionamiento de la ruta dinámica.
- Lectura correcta del identificador.
- Correspondencia entre ID y experiencia mostrada.
- Visualización de todos los campos disponibles.
- Funcionamiento con diferentes identificadores.
- Comportamiento ante un ID inexistente, si se aprueba la solución propuesta.
- Navegación sin recarga completa.
- Diseño responsivo.
- Ausencia de errores y regresiones.

Ejecutar las comprobaciones disponibles del proyecto, incluyendo lint y build cuando corresponda.

## 4. Archivos afectados

### Archivos existentes que deben inspeccionarse

- `src/data/experiences.ts`.
- Archivo que contiene la interfaz `Experience`.
- `src/app/experiences/page.tsx`, si existe.
- `src/app/experiences/[id]/page.tsx`, si existe.
- Componente `ExperienceCard`, si existe.
- `src/app/layout.tsx`.
- Componentes y estilos compartidos relevantes.

### Archivos que podrían crearse

- `src/app/experiences/[id]/page.tsx`, si todavía no existe.

### Archivos que podrían modificarse

- `src/app/experiences/[id]/page.tsx`.
- El componente `ExperienceCard`, únicamente si resulta necesario para integrar la navegación y se aprueba el cambio.

Cualquier modificación adicional deberá justificarse antes de implementarse.

## 5. Dependencias con otras funcionalidades

### Explorador

La página de detalle utiliza las mismas experiencias que el Explorador.

Las tarjetas del Explorador deberán permitir acceder al detalle correspondiente, conforme al diseño de navegación aprobado.

### Favoritos

La gestión de favoritos se desarrollará en `04-favorites`.

No se implementará estado compartido de favoritos dentro de esta especificación.

### Navbar

Se reutilizará la navegación global existente.

No se crearán componentes de navegación duplicados.

## 6. Restricciones

- Seguir las instrucciones de `AGENTS.md`.
- Utilizar `specs/requirements.md` como referencia de requisitos oficiales.
- Respetar `rules/coding.md` y `docs/architecture.md`.
- No modificar ni regenerar el dataset.
- No modificar la interfaz `Experience` sin aprobación.
- No duplicar los datos.
- No instalar dependencias adicionales innecesarias.
- No implementar funcionalidades de otras páginas.
- No realizar commits ni push sin autorización expresa.

## 7. Actualización documental

Tras implementar y validar:

- Actualizar `specs/03-experience-detail/task.md`.
- Actualizar `memory-bank/progress.md`.
- Actualizar `memory-bank/decisions.md` únicamente si se aprueban decisiones técnicas o arquitectónicas nuevas.
- Actualizar `docs/architecture.md` únicamente si se producen cambios arquitectónicos relevantes.

## 8. Estado del plan

**Pendiente de inspección del código existente y aprobación de los cambios necesarios.**