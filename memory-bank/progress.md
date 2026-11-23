# Estado del proyecto

Última revisión: 2026-11-23.

## Completado y verificado

- Estructura documental SDD creada y flujo de trabajo de `AGENTS.md` actualizado.
- Proyecto Next.js con App Router, React, TypeScript y Tailwind CSS configurados.
- `specs/requirements.md` contiene los requisitos funcionales oficiales del proyecto.
- El dataset contiene 100 IDs únicos (`exp-001` a `exp-100`), comprobado mediante lectura local de los identificadores.
- La ruta `/` ya tenía sección hero y enlace a `/experiences`.
- La Home ahora usa `public/images/home-hero.jpg`, copiada sin alterar desde `docs/references/paisaje.jpg`; conserva la marca de agua presente en el original.
- El hero y el CTA `/experiences` están implementados en `src/app/page.tsx`; la respuesta de Home y la imagen local se comprobaron por HTTP.
- La Navbar compartida está implementada en `src/components/navbar.tsx`, integrada desde el layout y marca la ruta activa con `usePathname`.
- El Explorador, la tarjeta, los controles de búsqueda/filtro y el hook de filtrado están implementados.
- La ruta `/experiences/[id]` localiza los datos, usa metadatos nativos, oculta el ID y devuelve 404 con `notFound()`.
- La lectura de `params` del detalle está dentro de `Suspense`; el warning de Next.js sobre instant navigation dejó de aparecer después del cambio.
- `ExperienceDocumentTitle` usa `useEffect([title])` para actualizar el título del detalle y restaurarlo en cleanup; `generateMetadata()` conserva la descripción y no duplica el título dinámico.
- Favoritos usa un `useState` compartido, un custom hook y props para sincronizar las tarjetas; no usa persistencia.
- La transmisión por props se comprobó en Explore y Favorites: `ExperienceCard` recibe `isFavorite` y `onToggleFavorite`.
- La ruta `/favorites` filtra el dataset por los IDs favoritos y reutiliza `ExperienceCard`.
- La ruta `/profile` muestra un usuario ficticio y el contador calculado desde el estado compartido de favoritos.

## En desarrollo

- Fase 1 completada: Home, Navbar y nuevo hero responsivo implementados. TypeScript, ESLint y build pasan; Home, CTA e imagen responden correctamente.
- Fase 2 implementada y validada estáticamente: TypeScript, ESLint y build pasan; las pruebas interactivas y visuales quedan para la validación integral.
- Fase 3 implementada y validada estáticamente: TypeScript, ESLint y build pasan; el build prerenderizó las rutas de los 100 IDs.
- Fase 4 implementada y validada estáticamente: TypeScript, ESLint y build pasan; `/favorites` se genera correctamente.
- Fase 5 implementada y validada estáticamente: TypeScript, ESLint y build pasan; `/profile` se genera correctamente.
- Fase 6: TypeScript, ESLint y build pasan; el dataset mantiene su integridad. El requisito global de `useEffect` está implementado; las pruebas interactivas y responsive siguen pendientes.
- Incidencia de navegación investigada y corregida en el detalle dinámico; las rutas probadas responden desde el servidor de desarrollo.

## Pendiente

- Probar manualmente los toggles y sincronización de favoritos entre rutas.
- Ejecutar pruebas manuales de rutas, filtros, contador y vista responsive.
- Verificar visualmente el hero en móvil y escritorio.
- Revisar la consola del navegador y confirmar navegación cliente interactiva; no hay herramienta de DevTools disponible en esta sesión.
- Completar la verificación interactiva y visual del Explorador.
- Validar navegación, estado compartido y responsividad de la aplicación.

## Bloqueado

- No se identificaron bloqueos técnicos de compilación.
- No se identificaron bloqueos técnicos ni decisiones pendientes para el efecto de título.
