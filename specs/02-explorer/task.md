# Tareas: Explorador de experiencias

## 1. Análisis inicial

- [ ] Revisar `src/data/experiences.ts`.
- [x] Verificar que el dataset contiene exactamente 100 experiencias y 100 IDs únicos.
- [x] Revisar la interfaz `Experience`.
- [x] Inspeccionar la ruta `/experiences`; no existía.
- [x] Identificar componentes y hooks reutilizables.
- [x] Revisar los estilos y la navegación existentes.
- [x] Comparar el código actual con `spec.md`.
- [x] Presentar y obtener aprobación de los cambios necesarios.

## 2. Catálogo de experiencias

- [x] Crear la ruta `/experiences`.
- [x] Crear `ExperienceCard`.
- [x] Conectar la cuadrícula al dataset local.
- [x] Organizar las tarjetas en una cuadrícula responsiva.
- [ ] Verificar que se muestran 100 experiencias sin filtros activos.

## 3. Búsqueda y filtros

- [x] Crear `SearchBar`.
- [x] Implementar la búsqueda por título.
- [x] Utilizar regex case-insensitive.
- [x] Crear `FilterBar`.
- [x] Implementar el filtro de categoría.
- [x] Incluir las cinco categorías oficiales.
- [x] Implementar el filtro de destino por ciudad o país.
- [ ] Verificar el funcionamiento independiente de cada criterio.
- [ ] Verificar la combinación de búsqueda, categoría y destino.
- [x] Encapsular la lógica de filtrado en `useExperiences`.

## 4. Sincronización con la URL

- [x] Integrar `useSearchParams`.
- [x] Integrar `usePathname`.
- [x] Reflejar el término de búsqueda en la URL.
- [x] Reflejar el filtro de categoría en la URL.
- [x] Reflejar el filtro de destino en la URL.
- [x] Recuperar los parámetros al cargar la página.
- [x] Prerrellenar los controles con los valores de la URL.
- [x] Filtrar los resultados desde la carga inicial.
- [ ] Verificar el funcionamiento de URLs compartidas con filtros activos.
- [x] Confirmar que el Explorador no necesita un `useEffect` propio; el requisito global se cumple en la página de detalle.
- [x] Verificar el efecto global del título y su dependencia `[title]` en `ExperienceDocumentTitle`.

## 5. Estados de interfaz

- [ ] Verificar el catálogo completo sin filtros.
- [ ] Verificar la visualización de resultados filtrados.
- [ ] Mostrar "No se encontraron resultados" cuando no haya coincidencias.
- [ ] Verificar el diseño en móvil.
- [ ] Verificar el diseño en escritorio.
- [ ] Comprobar la coherencia visual con el resto de la aplicación.

## 6. Validación

- [ ] Comprobar que `/experiences` funciona correctamente.
- [ ] Comprobar que la búsqueda no distingue mayúsculas y minúsculas.
- [ ] Comprobar que el filtro de categoría funciona de forma independiente.
- [ ] Comprobar que el filtro de destino funciona de forma independiente.
- [ ] Comprobar que los filtros se combinan correctamente.
- [ ] Comprobar que los parámetros activos se reflejan en la URL.
- [ ] Comprobar que una URL prefiltrada muestra los resultados correctos.
- [ ] Comprobar que los controles se prerrellenan correctamente.
- [ ] Comprobar el comportamiento sin resultados.
- [x] Verificar que la aplicación utiliza un `useEffect` real y correctamente implementado en la página de detalle.
- [x] Comprobar que la dependencia `[title]` actualiza el título sin renderizados adicionales ni bucles.
- [x] Ejecutar TypeScript, lint y build (todos pasan).
- [ ] Revisar posibles errores o regresiones.

## 7. Documentación

- [x] Actualizar `memory-bank/progress.md` con el trabajo realizado.
- [ ] Registrar nuevas decisiones en `memory-bank/decisions.md`, si corresponde.
- [x] Actualizar `docs/architecture.md` con la ruta, los componentes y el hook implementados.
- [ ] Marcar las tareas verificadas como completadas.

## 8. Criterios de finalización

El Explorador se considerará terminado cuando:

1. Se hayan verificado todos los requisitos aplicables de `spec.md`.
2. Las 100 experiencias puedan visualizarse sin filtros.
3. La búsqueda y los filtros funcionen de forma independiente y combinada.
4. Los parámetros de búsqueda y filtrado estén sincronizados con la URL.
5. Las URLs prefiltradas inicialicen correctamente los controles y resultados.
6. El diseño sea responsivo y coherente con el resto de la aplicación.
7. Las comprobaciones técnicas se hayan ejecutado sin errores pendientes que impidan el funcionamiento.
8. El estado de implementación esté reflejado en la documentación del proyecto.
9. Se haya verificado el cumplimiento del requisito global de utilizar al menos un `useEffect` correctamente implementado.

## 9. Estado

**Código implementado y validaciones estáticas superadas.** TypeScript, ESLint y build pasan; el catálogo usa el dataset existente de 100 experiencias. Quedan pendientes las pruebas de interacción con query params, URL prefiltradas, estado vacío y verificación visual responsive. El requisito global de `useEffect` se evaluará en una fase posterior, usando solo un efecto secundario real.