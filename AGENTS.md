
# AGENTS.md — Wanderlust Explorer

## 1. Objetivo

Este archivo define las instrucciones operativas para los agentes de IA
que trabajan en el proyecto Wanderlust Explorer.

El desarrollo sigue una metodología Spec-Driven Development (SDD).

AGENTS.md no sustituye las especificaciones funcionales, las reglas
técnicas ni la documentación del proyecto.

## 2. Documentación del proyecto

Antes de comenzar una tarea, consultar:

1. `docs/CONTEXT.md` — Contexto, objetivos y alcance.
2. `specs/requirements.md` — Requisitos oficiales de 4Geeks Academy.
3. `docs/architecture.md` — Arquitectura técnica del proyecto.
4. `rules/coding.md` — Convenciones y estándares de desarrollo.
5. `memory-bank/decisions.md` — Decisiones aprobadas.
6. `memory-bank/progress.md` — Estado y progreso del proyecto.

Si algún documento no existe, informar de ello.

No inventar su contenido ni asumir que está aprobado.

## 3. Fuente de verdad y especificaciones

El enunciado oficial de 4Geeks Academy es la fuente de verdad
para los requisitos funcionales y criterios de evaluación.

### Requisitos oficiales

`specs/requirements.md` debe recoger fielmente los requisitos
del enunciado original.

Reglas:

- Mantener la organización y el significado de los requisitos.
- No añadir funcionalidades que no aparezcan en el enunciado.
- No eliminar ni simplificar criterios de evaluación.
- No convertir recomendaciones técnicas en requisitos obligatorios.
- Mantener trazabilidad entre requisitos y funcionalidades.
- Si no se dispone del enunciado original, solicitarlo.
- No generar requisitos oficiales a partir de suposiciones.

### Especificaciones de implementación

Para desarrollar una funcionalidad se podrán crear especificaciones
técnicas dentro de `specs/`, cuando sea necesario.

Estas especificaciones deben:

- Referenciar los requisitos oficiales correspondientes.
- Definir el alcance concreto de la funcionalidad.
- Establecer criterios de aceptación verificables.
- Identificar los componentes y archivos afectados.
- Describir las decisiones técnicas relevantes.
- Distinguir requisitos obligatorios de propuestas de implementación.

No crear especificaciones adicionales sin necesidad.

Toda especificación nueva debe ser revisada y aprobada antes
de comenzar su implementación.

En caso de contradicción entre documentos, detenerse e informar.

## 4. Flujo de trabajo SDD

### Fase 1. Análisis

1. Leer AGENTS.md y la documentación relevante.
2. Identificar los requisitos oficiales relacionados con la tarea.
3. Inspeccionar el código existente.
4. Comprobar qué funcionalidades ya están implementadas.
5. Revisar las decisiones arquitectónicas aprobadas.
6. Identificar posibles dependencias y restricciones.

No duplicar funcionalidades existentes.

### Fase 2. Especificación

Antes de modificar código:

1. Definir el objetivo y alcance de la tarea.
2. Identificar los requisitos oficiales aplicables.
3. Establecer criterios de aceptación verificables.
4. Identificar los archivos que se crearán o modificarán.
5. Proponer la solución técnica.
6. Presentar la propuesta al usuario.

Esperar aprobación antes de implementar.

Si existen dudas o requisitos ambiguos, solicitar aclaración.

### Fase 3. Implementación

Una vez aprobada la propuesta:

1. Implementar exclusivamente el alcance autorizado.
2. Respetar la arquitectura y las reglas técnicas.
3. Reutilizar componentes y funcionalidades existentes.
4. Evitar modificaciones ajenas a la tarea.
5. No introducir dependencias sin autorización.
6. Mantener el código sencillo, legible y mantenible.

### Fase 4. Validación

1. Ejecutar las comprobaciones pertinentes.
2. Verificar los criterios de aceptación.
3. Comprobar que no se han introducido errores.
4. Informar de las validaciones realizadas.
5. Documentar los problemas o limitaciones pendientes.

No afirmar que una validación ha pasado si no se ha ejecutado.

### Fase 5. Actualización del Memory Bank

Después de una implementación validada:

1. Actualizar `memory-bank/progress.md` con el estado real.
2. Registrar nuevas decisiones aprobadas en
   `memory-bank/decisions.md`, cuando corresponda.
3. Mantener las referencias a los documentos relevantes.
4. Evitar duplicar información existente.

No marcar tareas como completadas sin evidencia.

## 5. Restricciones

- No inventar requisitos ni funcionalidades.
- No implementar sin aprobación previa.
- No modificar archivos ajenos a la tarea.
- No introducir dependencias sin autorización.
- No realizar commits ni pushes sin autorización.
- No desplegar sin autorización.
- No eliminar archivos existentes sin autorización.
- No modificar decisiones arquitectónicas aprobadas sin consultar.
- No crear documentación innecesaria.
- No duplicar requisitos entre documentos.
- No marcar tareas como completadas sin validación.

## 6. Idioma

- Documentación y explicaciones en español.
- Código, nombres de archivos e identificadores en inglés.
- Mantener consistencia en los textos de la aplicación.

## 7. Criterios de finalización

Una tarea se considera completada únicamente cuando:

1. Cumple los requisitos oficiales aplicables.
2. Respeta la especificación aprobada.
3. Las validaciones pertinentes se han ejecutado.
4. Los resultados y limitaciones se han comunicado.
5. El Memory Bank refleja el estado verificado.

## 8. Principio fundamental

El agente debe trabajar siguiendo la secuencia:

ANÁLISIS → ESPECIFICACIÓN → APROBACIÓN → IMPLEMENTACIÓN
→ VALIDACIÓN → ACTUALIZACIÓN DEL MEMORY BANK

La prioridad es cumplir correctamente el enunciado de 4Geeks Academy,
manteniendo trazabilidad y evitando complejidad innecesaria.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
