# Tareas: Perfil de usuario

## 1. Análisis inicial

- [ ] Revisar `src/app/profile/page.tsx`, si existe.
- [ ] Revisar `src/app/layout.tsx`.
- [ ] Inspeccionar el estado compartido de favoritos.
- [ ] Identificar los componentes y hooks reutilizables.
- [ ] Revisar la navegación y los estilos existentes.
- [ ] Comparar el código actual con `spec.md`.
- [ ] Identificar posibles dependencias pendientes con `04-favorites`.
- [ ] Presentar los cambios necesarios para aprobación.

## 2. Información simulada del usuario

- [ ] Definir los datos ficticios que se mostrarán.
- [ ] Verificar que no se utilizan datos personales reales.
- [ ] Preparar la presentación visual del perfil.
- [ ] Mantener coherencia con el sistema de diseño existente.

## 3. Página de Perfil

- [x] Crear la ruta `/profile`.
- [x] Mostrar la información mínima de un usuario ficticio.
- [x] Reutilizar el provider de favoritos y los estilos existentes.
- [x] Integrar la `Navbar` compartida desde el layout.
- [x] La `Navbar` identifica la ruta activa mediante `usePathname`.

## 4. Contador de favoritos

- [x] Conectar la página al estado compartido de favoritos.
- [x] Obtener los identificadores de las experiencias favoritas.
- [x] Calcular el número de favoritos a partir del estado existente.
- [x] Mostrar el contador en la página.
- [ ] Verificar que el contador muestra cero cuando no hay favoritos.
- [ ] Verificar que el contador aumenta al marcar una experiencia.
- [ ] Verificar que el contador disminuye al desmarcar una experiencia.
- [ ] Verificar que no se mantiene un contador independiente.

## 5. Integración entre páginas

- [ ] Verificar la navegación desde otras páginas hacia `/profile`.
- [ ] Verificar que el contador refleja las selecciones realizadas en el Explorador.
- [ ] Verificar que el contador coincide con las experiencias mostradas en `/favorites`.
- [ ] Verificar que el estado se mantiene durante la navegación.
- [ ] Comprobar que no se modifica el funcionamiento existente de Favoritos.

## 6. Validación

- [ ] Comprobar que `/profile` funciona correctamente.
- [ ] Comprobar que se muestra un perfil simulado.
- [ ] Comprobar que el contador refleja el estado real de favoritos.
- [ ] Probar el contador con cero favoritos.
- [ ] Probar el contador con varias experiencias marcadas.
- [ ] Probar el contador después de desmarcar experiencias.
- [ ] Comprobar la navegación sin recarga completa.
- [ ] Verificar el diseño en móvil.
- [ ] Verificar el diseño en escritorio.
- [x] Ejecutar TypeScript, lint y build (todos pasan).
- [ ] Revisar posibles errores o regresiones.

## 7. Documentación

- [x] Actualizar `memory-bank/progress.md` con el trabajo realizado.
- [x] No se requirieron nuevas decisiones arquitectónicas para el Perfil.
- [x] Actualizar `docs/architecture.md` con la ruta `/profile`.
- [x] Marcar como completadas las tareas implementadas y validadas.

## 8. Criterios de finalización

La página de Perfil se considerará terminada cuando:

1. La ruta `/profile` funcione correctamente.
2. Se muestre información simulada de un usuario.
3. El contador de favoritos utilice el estado compartido existente.
4. El contador refleje correctamente las experiencias marcadas y desmarcadas.
5. No se duplique el estado ni la lógica de favoritos.
6. La página sea responsiva y visualmente coherente.
7. Las comprobaciones técnicas se hayan ejecutado sin errores pendientes que impidan el funcionamiento.
8. El estado de implementación esté reflejado en la documentación del proyecto.

## 9. Estado

**Implementada y validada estáticamente.** TypeScript, ESLint y build pasan; `/profile` se genera correctamente. Las pruebas manuales del contador sincronizado y la visualización responsive quedan pendientes de la validación integral.