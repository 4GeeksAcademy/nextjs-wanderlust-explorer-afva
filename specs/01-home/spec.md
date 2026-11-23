# Especificación: Home

## 1. Objetivo

Definir los requisitos de la página principal de Wanderlust Explorer, que constituye el punto de entrada a la aplicación.

## 2. Requisitos oficiales

**Fuente:** 4Geeks Academy, *Wanderlust Explorer con React y Next.js*.

La página Home debe:

- Estar disponible en la ruta `/`.
- Mostrar una sección hero.
- Incluir un botón que permita navegar a `/experiences`.

## 3. Comportamiento funcional

### 3.1. Página principal

- El usuario puede acceder a la Home mediante la ruta `/`.
- La página muestra una sección hero.
- El usuario puede acceder al Explorador mediante el botón de navegación.

### 3.2. Navegación

- El botón debe dirigir al usuario a `/experiences`.
- La navegación debe realizarse del lado del cliente, sin recargar completamente la página.

## 4. Requisitos generales aplicables

Según el enunciado oficial:

- La aplicación debe ser responsiva en dispositivos móviles y de escritorio.
- Debe mantener coherencia visual entre páginas.
- La barra de navegación (`Navbar`) debe estar presente en todas las páginas.
- La `Navbar` debe identificar visualmente la ruta activa mediante `usePathname`.

## 5. Alcance

### Incluido

- Ruta principal `/`.
- Sección hero.
- Botón de navegación al Explorador.
- Requisitos generales de navegación y presentación aplicables a la Home.

### Excluido

- Catálogo de experiencias.
- Búsqueda y filtros.
- Página de detalle.
- Gestión de favoritos.
- Perfil de usuario.

## 6. Criterios de aceptación

Los siguientes criterios permiten verificar los requisitos anteriores. No constituyen requisitos funcionales adicionales.

- [ ] La ruta `/` muestra correctamente la Home.
- [ ] La sección hero es visible.
- [ ] El botón permite navegar a `/experiences`.
- [ ] La navegación no provoca una recarga completa.
- [ ] La página es utilizable en móvil y escritorio.
- [ ] El diseño mantiene coherencia con el resto de la aplicación.
- [ ] La `Navbar` está presente e identifica la ruta activa.

## 7. Estado inicial

La Home ya cuenta con una implementación parcial.

Antes de realizar modificaciones, será necesario inspeccionar el código existente y comprobar qué requisitos están cumplidos.

No se deben sustituir ni reconstruir funcionalidades que ya satisfagan esta especificación.