# Tareas: Detalle de experiencia

## 1. Análisis inicial

- [x] Revisar `src/data/experiences.ts` sin modificarlo.
- [x] Identificar el tipo y formato de los IDs.
- [x] Revisar la interfaz `Experience`.
- [x] Inspeccionar la ruta dinámica `/experiences/[id]`; no existía.
- [x] Revisar la implementación del Explorador.
- [x] Identificar componentes reutilizables.
- [x] Revisar la navegación y los estilos existentes.
- [x] Comparar el código actual con `spec.md`.
- [x] Implementar el alcance aprobado.

## 2. Ruta dinámica

- [x] Crear `src/app/experiences/[id]/page.tsx`.
- [x] Obtener el parámetro `id` desde la URL.
- [x] Adaptar el tratamiento del identificador al tipo real del dataset.
- [ ] Verificar que diferentes IDs permiten consultar diferentes experiencias.

## 3. Obtención de datos

- [x] Importar el dataset local existente.
- [x] Localizar la experiencia correspondiente al ID recibido.
- [x] Reutilizar la interfaz `Experience`.
- [x] No duplicar ni modificar los datos.

## 4. Presentación de la experiencia

- [x] Mostrar el título.
- [x] Mostrar la descripción.
- [x] Mostrar la categoría.
- [x] Mostrar el destino.
- [x] Mostrar el precio.
- [x] Mostrar la valoración.
- [x] Mostrar la imagen.
- [x] Omitir el identificador técnico de la interfaz y usarlo solo para localizar la experiencia, conforme a la decisión aprobada.
- [x] Actualizar el título del documento con `useEffect` cuando cambia la experiencia.
- [x] Restaurar el título anterior al desmontar el componente y mantener una dependencia `[title]` explícita.
- [ ] Mantener coherencia visual con el resto de la aplicación.

## 5. Integración y casos especiales

- [ ] Verificar el acceso directo mediante URL.
- [ ] Verificar la navegación desde el Explorador cuando esté disponible.
- [ ] Verificar la presencia de la `Navbar`.
- [x] Definir y aprobar el comportamiento para IDs inexistentes.
- [x] Implementar `notFound()`.
- [ ] Evitar modificaciones en la gestión de favoritos.

## 6. Validación

- [ ] Comprobar que la ruta `/experiences/[id]` funciona correctamente.
- [ ] Comprobar que se obtiene el ID de la URL.
- [ ] Comprobar que se muestra la experiencia correspondiente.
- [ ] Probar diferentes identificadores válidos.
- [ ] Verificar que se muestran todos los campos requeridos.
- [ ] Comprobar el comportamiento con un identificador inexistente, según la decisión aprobada.
- [ ] Comprobar la navegación sin recarga completa.
- [x] Colocar el acceso a `params` bajo `Suspense` para evitar el warning de navegación instantánea de Next.js.
- [x] Cumplir el requisito global de `useEffect` mediante el efecto secundario real del título.
- [ ] Verificar el diseño en móvil.
- [ ] Verificar el diseño en escritorio.
- [x] Ejecutar TypeScript, lint y build (todos pasan).
- [ ] Revisar posibles errores o regresiones.

## 7. Documentación

- [x] Actualizar `memory-bank/progress.md` con el trabajo realizado.
- [x] Registrar las decisiones aprobadas de ID y 404 en `memory-bank/decisions.md`.
- [x] Actualizar `docs/architecture.md`.
- [ ] Marcar las tareas verificadas como completadas.

## 8. Criterios de finalización

La página de detalle se considerará terminada cuando:

1. La ruta dinámica funcione correctamente.
2. El identificador se obtenga desde la URL.
3. La experiencia se localice correctamente en el dataset existente.
4. Se muestre la información completa de la experiencia seleccionada.
5. La navegación y el diseño sean coherentes con el resto de la aplicación.
6. Los casos especiales aprobados se gestionen correctamente.
7. Las comprobaciones técnicas se hayan ejecutado sin errores pendientes que impidan el funcionamiento.
8. El estado de implementación esté reflejado en la documentación del proyecto.

## 9. Estado

**Implementada y validada estáticamente.** TypeScript, ESLint y build pasan; Next.js prerenderiza las rutas de los 100 IDs. El título se actualiza mediante `useEffect([title])` y se restaura en cleanup; `generateMetadata()` conserva la descripción y hereda el título base. Las pruebas manuales de navegación en navegador, cambio de título, contenido, 404 y responsive siguen pendientes.