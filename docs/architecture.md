# Arquitectura técnica

## Implementado y verificado

- La aplicación usa Next.js App Router bajo `src/app/`.
- `src/app/layout.tsx` define el layout raíz, importa `globals.css` y declara los metadatos iniciales.
- `src/components/navbar.tsx` implementa la navegación compartida y marca la ruta activa mediante `usePathname`; el layout raíz la muestra en las páginas.
- `src/app/page.tsx` implementa la ruta raíz (`/`) con hero y enlace a `/experiences`.
- `src/app/experiences/page.tsx` implementa el catálogo y lo contiene en `Suspense` para los hooks de URL.
- `src/app/experiences/[id]/page.tsx` localiza la experiencia por ID, genera metadatos con la API nativa de Next.js y usa `notFound()` si no existe; no muestra el ID técnico. La lectura asíncrona de `params` está dentro de `Suspense` para preservar la navegación instantánea con Cache Components.
- `src/components/experience-document-title.tsx` actualiza el título del detalle con `useEffect([title])` y restaura el título previo en cleanup. Las experiencias heredan el título base del layout desde `generateMetadata()`, evitando dos fuentes dinámicas para el mismo título.
- El detalle exporta `generateStaticParams()` para prerenderizar los IDs del dataset.
- `src/components/favorites-provider.tsx` mantiene IDs favoritos en `useState` compartido desde el layout raíz; `src/hooks/use-favorites.ts` expone el contexto a los consumidores.
- `src/app/favorites/page.tsx` filtra el dataset por los IDs favoritos y reutiliza `ExperienceCard`.
- `src/app/profile/page.tsx` muestra un perfil ficticio y calcula el contador directamente desde los IDs favoritos compartidos.
- `ExperienceCard` recibe el estado y el toggle de favorito mediante props; no hay persistencia entre recargas.
- `src/components/experience-explorer.tsx`, `src/components/experience-card.tsx`, `src/components/search-bar.tsx` y `src/components/filter-bar.tsx` presentan y controlan el catálogo.
- `src/hooks/use-experiences.ts` deriva búsqueda y filtros de `useSearchParams`, y actualiza query params con `usePathname` y `useRouter`.
- La interfaz `Experience` está definida en `src/types/experience.ts`; los registros permanecen en `src/data/experiences.ts`.
- `src/app/globals.css` y las clases utilizadas por la página forman parte de la integración con Tailwind CSS 4.
- No se utiliza una biblioteca externa de gestión de estado.

## Pendiente de definir

- La verificación interactiva y visual de las páginas y flujos implementados.
- La verificación interactiva y visual del Explorador.

No se consideran aprobadas decisiones que no estén registradas en `memory-bank/decisions.md`.
