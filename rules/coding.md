# Convenciones de desarrollo

## TypeScript

- Mantener los tipos explícitos en contratos, props y datos compartidos cuando mejoren la claridad.
- Evitar `any`; preferir tipos concretos o `unknown` con validación cuando el tipo no se conozca.
- Mantener identificadores y nombres de código en inglés.

## React y Next.js

- Seguir el App Router y la organización existente bajo `src/app/`.
- Preferir componentes de servidor por defecto; usar componentes de cliente solo cuando una interacción o API del navegador lo requiera.
- Mantener componentes enfocados y separar presentación, acceso a datos y lógica cuando la complejidad lo justifique.
- Reutilizar componentes y utilidades existentes antes de crear duplicados.
- No introducir dependencias ni cambiar decisiones arquitectónicas sin autorización.

## Tailwind CSS

- Seguir la configuración y versión existentes de Tailwind CSS.
- Reutilizar patrones de estilo consistentes y evitar duplicación innecesaria de clases.
- Mantener los estilos junto al componente cuando siga el patrón ya establecido; reservar estilos globales para necesidades globales.

## Legibilidad y responsabilidades

- Elegir nombres descriptivos y mantener cada módulo centrado en una responsabilidad clara.
- Evitar abstracciones prematuras y cambios ajenos al requisito aprobado.
- Añadir comentarios solo cuando aclaren una decisión o lógica no evidente.

## Validación

- Ejecutar las validaciones pertinentes al cambio; los scripts disponibles incluyen `npm run lint` y `npm run build`.
- No declarar una tarea completada sin validar los criterios de aceptación aplicables.
