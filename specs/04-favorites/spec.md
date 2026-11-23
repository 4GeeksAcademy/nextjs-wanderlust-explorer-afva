# Especificación: Favoritos

## 1. Objetivo

Definir los requisitos de la funcionalidad de favoritos de Wanderlust Explorer, que permite al usuario marcar y desmarcar experiencias y consultar las experiencias seleccionadas en una página específica.

## 2. Requisitos oficiales

**Fuente:** 4Geeks Academy, *Wanderlust Explorer con React y Next.js*.

La funcionalidad de favoritos debe:

- Estar disponible en la ruta `/favorites`.
- Mostrar únicamente las experiencias marcadas como favoritas.
- Incorporar un icono de corazón en cada tarjeta de experiencia.
- Permitir activar o desactivar el estado de favorito mediante el icono.
- Reflejar visualmente si una experiencia está marcada como favorita.
- Guardar los identificadores de las experiencias favoritas en un `useState` de nivel compartido.
- Compartir el estado mediante props donde sea necesario.

El enunciado oficial no requiere persistencia entre recargas de página.

## 3. Comportamiento funcional

### 3.1. Selección de favoritos

- Cada tarjeta de experiencia debe incorporar un icono de corazón.
- Al activar el icono, la experiencia se añade a la lista de favoritos.
- Al desactivar el icono, la experiencia se elimina de la lista.
- El icono debe indicar visualmente el estado actual de la experiencia.

### 3.2. Estado compartido

- La lista de favoritos debe almacenarse mediante `useState` de React.
- El estado debe ser accesible desde los componentes que lo necesiten.
- Los identificadores de las experiencias favoritas deben mantenerse sincronizados durante la navegación dentro de la aplicación.
- Los componentes deben recibir el estado y las funciones necesarias mediante props, conforme a los requisitos oficiales.

### 3.3. Página de favoritos

- La página debe estar disponible en `/favorites`.
- Debe mostrar exclusivamente las experiencias cuyos identificadores estén incluidos en la lista de favoritos.
- Las experiencias deben obtenerse del dataset local existente.
- Las tarjetas deben reflejar correctamente el estado de favorito.
- El usuario debe poder desmarcar una experiencia desde su tarjeta.

### 3.4. Sincronización entre páginas

- Una experiencia marcada como favorita desde el Explorador debe aparecer en `/favorites`.
- Una experiencia desmarcada debe dejar de aparecer en la lista de favoritos.
- El estado debe mantenerse mientras la aplicación conserve el estado React compartido.

### 3.5. Lista vacía

Cuando no existan experiencias favoritas, la página no tendrá tarjetas que mostrar.

El texto o presentación de este estado se determinará durante el diseño, sin introducir nuevas funcionalidades.

## 4. Requisitos generales aplicables

Según el enunciado oficial:

- La aplicación debe ser responsiva en móvil y escritorio.
- Debe mantener coherencia visual entre páginas.
- La `Navbar` debe estar presente en todas las páginas.
- La navegación debe realizarse del lado del cliente.
- Los componentes deben estar organizados de forma lógica.
- Los tipos e interfaces TypeScript deben utilizarse de forma consistente.

## 5. Restricciones oficiales

- No utilizar Redux, Zustand ni otras bibliotecas externas de gestión de estado.
- Utilizar `useState` nativo de React.
- Compartir el estado mediante props o custom hooks.
- No implementar persistencia mediante `localStorage`, ya que está fuera del alcance del proyecto.

## 6. Alcance

### Incluido

- Ruta `/favorites`.
- Lista de experiencias favoritas.
- Icono de corazón en las tarjetas.
- Activación y desactivación de favoritos.
- Representación visual del estado de favorito.
- Gestión del estado compartido mediante React.
- Integración con las tarjetas del Explorador.
- Integración con el contador de favoritos utilizado posteriormente en Perfil.

### Excluido

- Persistencia de favoritos entre recargas.
- Almacenamiento en bases de datos.
- Autenticación de usuarios.
- Sincronización con servidores externos.
- Implementación de la página de Perfil.
- Modificación del dataset o de la interfaz `Experience`.

## 7. Criterios de aceptación

Los siguientes criterios permiten verificar los requisitos oficiales sin añadir nuevas funcionalidades.

- [ ] La ruta `/favorites` funciona correctamente.
- [ ] Cada tarjeta de experiencia incorpora un icono de corazón.
- [ ] El icono permite marcar y desmarcar una experiencia.
- [ ] El estado del icono se representa visualmente.
- [ ] Los identificadores favoritos se almacenan mediante `useState` compartido.
- [ ] El estado se transmite correctamente a los componentes que lo necesitan.
- [ ] La página muestra únicamente las experiencias favoritas.
- [ ] Las experiencias marcadas desde el Explorador aparecen en Favoritos.
- [ ] Las experiencias desmarcadas dejan de aparecer en Favoritos.
- [ ] El estado se mantiene durante la navegación mientras el estado React permanezca montado.
- [ ] No se utilizan bibliotecas externas de gestión de estado.
- [ ] La página es responsiva y visualmente coherente.

## 8. Estado inicial

Antes de implementar la funcionalidad será necesario inspeccionar los componentes y el estado existentes.

La implementación debe reutilizar `ExperienceCard`, el dataset y la interfaz `Experience`, evitando duplicar componentes o datos.

No se deben modificar otras funcionalidades sin identificar previamente las dependencias y obtener aprobación.