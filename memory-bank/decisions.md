# Decisiones técnicas y arquitectónicas

Las decisiones técnicas o arquitectónicas aprobadas se registran a continuación. Los hechos implementados se describen en `docs/architecture.md`; no se consideran decisiones aprobadas por ese solo hecho.

### 2026-11-23 — Detalle de experiencia

- **Decisión:** El ID se utiliza para localizar la experiencia, pero no se muestra en la interfaz. Para IDs inexistentes se utiliza `notFound()` de Next.js; los metadatos se generan con la API nativa del framework.
- **Justificación:** Decisión aprobada para la página de detalle; conserva el identificador como dato técnico y usa el manejo de rutas inexistentes del App Router.
- **Referencia:** `specs/03-experience-detail/spec.md` y `specs/requirements.md`, apartado 2.

### 2026-11-23 — Estado de favoritos

- **Decisión:** Mantener los IDs favoritos en un `useState` compartido por un provider React y exponerlos mediante un custom hook; no persistirlos entre recargas ni usar bibliotecas externas de estado.
- **Justificación:** Cumple las restricciones oficiales y permite compartir el estado entre Explorador, Favoritos y Perfil.
- **Referencia:** `specs/04-favorites/spec.md` y `specs/requirements.md`, apartados 4 y 6.

### 2026-11-23 — Título del detalle con useEffect

- **Decisión:** Actualizar `document.title` desde `ExperienceDocumentTitle` mediante `useEffect` dependiente de `title` y restaurar el título previo en el cleanup. `generateMetadata()` mantiene la descripción y deja que el detalle herede el título base del layout.
- **Justificación:** Cumple el requisito global con un efecto secundario real, sin estado React adicional ni una segunda fuente de metadatos dinámicos.
- **Referencia:** `specs/03-experience-detail/spec.md`, ejemplos de `useEffect`; `specs/requirements.md`, apartados 5 y 7.

Registrar cada nueva decisión aprobada con este formato:

### YYYY-MM-DD — Título breve

- **Decisión:** qué se aprobó.
- **Justificación:** motivo y alternativas relevantes.
- **Referencia:** requisito o documento relacionado.
