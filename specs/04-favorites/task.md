# Tareas: Favoritos

## 1. Análisis inicial

- [ ] Revisar `src/data/experiences.ts`.
- [ ] Revisar la interfaz `Experience`.
- [x] Revisar `src/app/layout.tsx`.
- [x] Inspeccionar la implementación del Explorador.
- [ ] Inspeccionar la ruta `/favorites`, si existe.
- [ ] Revisar el componente `ExperienceCard`, si existe.
- [ ] Identificar componentes y hooks reutilizables.
- [ ] Identificar la gestión actual del estado, si existe.
- [ ] Comparar el código existente con `spec.md`.
- [ ] Presentar los cambios necesarios para aprobación.

## 2. Estado compartido

- [ ] Definir la ubicación del estado compartido.
- [x] Implementar un `useState` compartido con los IDs favoritos.
- [x] Implementar la lógica para añadir y eliminar experiencias de favoritos.
- [x] Permitir consultar el estado mediante `useFavorites`.
- [x] Pasar el estado y la función de toggle a las tarjetas mediante props.
- [x] No utilizar `localStorage` ni gestión de estado externa.

## 3. Integración con ExperienceCard

- [x] Incorporar el icono de corazón.
- [x] Recibir el estado de favorito mediante props.
- [x] Recibir la función de activación y desactivación mediante props.
- [x] Mostrar visualmente el estado de favorito.
- [x] Permitir marcar y desmarcar experiencias.
- [x] Conservar los enlaces existentes a los detalles.
- [x] Confirmar que Explore y Favorites pasan `isFavorite` y `onToggleFavorite` a `ExperienceCard` mediante props.
- [ ] Evitar navegación involuntaria al interactuar con el corazón.

## 4. Página Favoritos

- [x] Crear la ruta `/favorites`.
- [x] Obtener los IDs favoritos del estado compartido.
- [x] Filtrar las experiencias del dataset por esos IDs.
- [x] Mostrar únicamente las experiencias favoritas.
- [x] Reutilizar `ExperienceCard`.
- [x] Permitir eliminar experiencias de favoritos desde la página.
- [x] Mostrar un estado vacío cuando no existan favoritos.

## 5. Integración entre páginas

- [ ] Verificar que una experiencia marcada en el Explorador aparece en Favoritos.
- [ ] Verificar que una experiencia desmarcada desaparece de Favoritos.
- [ ] Verificar que el icono refleja el estado actualizado.
- [ ] Verificar que el estado se mantiene durante la navegación entre páginas.
- [ ] Comprobar que el estado podrá reutilizarse posteriormente en Perfil.

## 6. Validación

- [ ] Comprobar que `/favorites` funciona correctamente.
- [ ] Comprobar el funcionamiento del icono de corazón.
- [ ] Comprobar la activación y desactivación de favoritos.
- [ ] Comprobar que no se generan IDs duplicados.
- [ ] Comprobar que solo se muestran experiencias favoritas.
- [ ] Comprobar la sincronización del estado entre páginas.
- [x] Inspeccionar que el estado y la función toggle se transmiten mediante props donde corresponde.
- [ ] Comprobar el comportamiento cuando no hay favoritos.
- [ ] Verificar el diseño en móvil.
- [ ] Verificar el diseño en escritorio.
- [x] Ejecutar TypeScript, lint y build (todos pasan).
- [ ] Revisar posibles errores o regresiones.

## 7. Documentación

- [x] Actualizar `memory-bank/progress.md` con el trabajo realizado.
- [x] Registrar la decisión aprobada de estado compartido en `memory-bank/decisions.md`.
- [x] Actualizar `docs/architecture.md` con el provider y el hook compartidos.
- [x] Marcar como completadas las tareas implementadas y validadas.

## 8. Criterios de finalización

La funcionalidad de Favoritos se considerará terminada cuando:

1. El usuario pueda marcar y desmarcar experiencias mediante el icono de corazón.
2. El estado se gestione mediante `useState` compartido.
3. Las tarjetas reflejen visualmente el estado de favorito.
4. La página `/favorites` muestre únicamente las experiencias seleccionadas.
5. Los cambios se reflejen correctamente entre las páginas.
6. No se utilicen mecanismos de persistencia ni bibliotecas externas de gestión de estado.
7. La página sea responsiva y mantenga coherencia visual.
8. Las comprobaciones técnicas no presenten errores pendientes que impidan el funcionamiento.
9. El estado de implementación esté reflejado en la documentación del proyecto.

## 9. Estado

**Implementada y validada estáticamente.** TypeScript, ESLint y build pasan; `/favorites` se genera correctamente. Las pruebas manuales de sincronización entre páginas, toggle y estado tras navegar quedan pendientes de la fase integral.