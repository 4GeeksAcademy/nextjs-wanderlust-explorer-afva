# Tareas: Home

## 1. Análisis inicial

- [x] Revisar `src/app/page.tsx`.
- [x] Revisar `src/app/layout.tsx`.
- [x] Identificar componentes de navegación y estilos existentes.
- [x] Comparar la implementación actual con `spec.md`.
- [x] Identificar funcionalidades completas, parciales y pendientes.
- [x] Presentar los cambios necesarios para su aprobación.

## 2. Implementación

Ejecutar únicamente las tareas que resulten necesarias tras la inspección y aprobación.

- [x] Verificar la sección hero existente.
- [x] Verificar el botón existente hacia `/experiences`.
- [x] Implementar la `Navbar` compartida con enlace activo mediante `usePathname`.
- [x] Implementar la composición responsiva para móvil y escritorio.
- [x] Conservar el CTA existente hacia `/experiences` y la navegación compartida.

## 3. Validación

- [x] Comprobar que la ruta `/` responde correctamente.
- [x] Comprobar que el hero se incluye en el HTML servido.
- [x] Comprobar que el botón enlaza a `/experiences`.
- [ ] Comprobar que la navegación se realiza sin recarga completa.
- [ ] Comprobar que la `Navbar` está presente e identifica la ruta activa.
- [ ] Verificar la visualización en móvil y escritorio.
- [x] Ejecutar diagnósticos TypeScript, ESLint focalizado y build.
- [x] Revisar errores estáticos; no se encontraron en la Home.

## 4. Documentación

- [x] Actualizar `memory-bank/progress.md` con el trabajo realizado.
- [x] Confirmar que no se requiere una nueva decisión arquitectónica para la Home.
- [x] Actualizar `docs/architecture.md` con la Navbar compartida.
- [x] Marcar como completadas las tareas implementadas y validadas.

## 5. Criterios de finalización

La Home se considerará terminada cuando:

1. Se hayan verificado todos los requisitos aplicables de `spec.md`.
2. Se hayan implementado y validado los cambios necesarios, si los hubiera.
3. No existan errores pendientes que impidan su funcionamiento.
4. El estado de la implementación esté reflejado en la documentación del proyecto.

## 6. Estado

**Home visual actualizada.** TypeScript, ESLint, build y comprobación HTTP de Home, CTA e imagen local pasaron. La disposición incluye reglas responsive; la inspección visual real en móvil/escritorio y la navegación cliente siguen pendientes.