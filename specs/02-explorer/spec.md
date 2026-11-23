# Especificación: Explorador de experiencias

## 1. Objetivo

Definir los requisitos de la página Explorador de Wanderlust Explorer, que permite consultar, buscar y filtrar las experiencias turísticas disponibles.

## 2. Requisitos oficiales

**Fuente:** 4Geeks Academy, *Wanderlust Explorer con React y Next.js*.

La página Explorador debe:

- Estar disponible en la ruta `/experiences`.
- Mostrar las 100 experiencias del dataset local en una cuadrícula de tarjetas.
- Permitir buscar experiencias por título.
- Permitir filtrar experiencias por categoría y destino.
- Combinar correctamente la búsqueda y los filtros.
- Reflejar el término de búsqueda y los filtros activos en los parámetros de la URL.
- Recuperar los parámetros de la URL al cargar la página y mostrar los resultados correspondientes.

## 3. Comportamiento funcional

### 3.1. Catálogo de experiencias

- El Explorador muestra las experiencias disponibles en `src/data/experiences.ts`.
- Sin filtros activos, se muestran las 100 experiencias.
- Las experiencias se presentan mediante tarjetas.
- Las tarjetas utilizan los datos definidos por la interfaz `Experience`.

### 3.2. Búsqueda por título

- El usuario puede introducir un término de búsqueda.
- La búsqueda compara el término introducido con el título de cada experiencia.
- La comparación utiliza una expresión regular sin distinción entre mayúsculas y minúsculas (`case-insensitive`).
- Los resultados muestran únicamente las experiencias cuyo título coincide con el término buscado.

Ejemplo del enunciado oficial:

```typescript
new RegExp(term, 'i').test(experience.title)
```

### 3.3. Filtro de categoría

El usuario puede filtrar las experiencias por una de las cinco categorías disponibles:

- Adventure
- Culture
- Food
- Wellness
- Nature

El filtro puede implementarse mediante un desplegable (`dropdown`) o un grupo de botones.

### 3.4. Filtro de destino

- El usuario puede filtrar experiencias por ciudad o país de destino.
- El filtro puede implementarse mediante un desplegable o un campo de búsqueda.
- Los resultados deben corresponder al destino seleccionado o introducido.

### 3.5. Combinación de filtros

- La búsqueda por título debe funcionar de forma independiente.
- El filtro de categoría debe funcionar de forma independiente.
- El filtro de destino debe funcionar de forma independiente.
- Cuando se utilizan simultáneamente, los tres criterios deben combinarse correctamente.

### 3.6. Sincronización con la URL

- El término de búsqueda y los filtros activos deben reflejarse como `query parameters` en la URL.
- Deben utilizarse `useSearchParams` y `usePathname` de Next.js.
- Al acceder a una URL con parámetros existentes, los controles deben mostrar los valores correspondientes.
- Los resultados deben aparecer filtrados según esos parámetros desde la carga de la página.

Ejemplo del enunciado:

```text
/experiences?search=vela&category=adventure&destination=Croatia
```

### 3.7. Ausencia de resultados

Cuando ningún elemento del dataset coincida con los criterios activos, el Explorador debe mostrar el mensaje:

**"No se encontraron resultados"**

## 4. Componentes y hooks aplicables

El enunciado oficial requiere los siguientes componentes:

- `ExperienceCard`: representación de una experiencia.
- `SearchBar`: interfaz de búsqueda.
- `FilterBar`: interfaz de filtros.

También establece:

- Utilizar al menos un custom hook que encapsule la lógica de filtrado.
- Utilizar `useEffect` correctamente en al menos un componente de la aplicación.

El uso de `useEffect` es un requisito global del proyecto, no necesariamente exclusivo del Explorador.

## 5. Requisitos generales aplicables

- La aplicación debe ser responsiva en móvil y escritorio.
- Debe mantener coherencia visual entre páginas.
- La `Navbar` debe estar presente e identificar la ruta activa mediante `usePathname`.
- La navegación entre páginas debe realizarse sin recargas completas.
- Los tipos e interfaces de TypeScript deben utilizarse de forma consistente.
- Los componentes deben estar divididos de forma lógica.

## 6. Alcance

### Incluido

- Ruta `/experiences`.
- Cuadrícula de experiencias.
- Búsqueda por título mediante regex case-insensitive.
- Filtros de categoría y destino.
- Combinación de búsqueda y filtros.
- Sincronización de filtros con la URL.
- Inicialización de los controles desde los parámetros de la URL.
- Mensaje cuando no existen resultados.
- Componentes y lógica de filtrado necesarios.

### Excluido

- Creación o regeneración del dataset.
- Modificación de la interfaz `Experience`.
- Implementación de la página de detalle.
- Implementación de la página de favoritos.
- Implementación de la página de perfil.
- Persistencia de datos.
- Paginación, ordenación y conexión con APIs externas.

La gestión compartida de favoritos corresponde a la funcionalidad `04-favorites`, aunque las tarjetas del Explorador deberán integrarse posteriormente con ella.

## 7. Criterios de aceptación

Los siguientes criterios permiten verificar los requisitos oficiales sin introducir nuevas funcionalidades.

- [ ] La ruta `/experiences` muestra correctamente el Explorador.
- [ ] Sin filtros activos se muestran las 100 experiencias.
- [ ] Las experiencias se presentan en una cuadrícula de tarjetas.
- [ ] La búsqueda filtra por título utilizando regex case-insensitive.
- [ ] El filtro de categoría permite seleccionar las cinco categorías.
- [ ] El filtro de destino permite filtrar por ciudad o país.
- [ ] La búsqueda y los filtros funcionan de forma independiente.
- [ ] La búsqueda y los filtros se combinan correctamente.
- [ ] Los parámetros activos se reflejan en la URL.
- [ ] Los controles se prerrellenan al acceder mediante una URL con parámetros.
- [ ] Los resultados iniciales corresponden a los parámetros de la URL.
- [ ] Se muestra "No se encontraron resultados" cuando corresponde.
- [ ] La página es responsiva y mantiene coherencia visual.
- [ ] La implementación reutiliza el dataset y los tipos existentes.

## 8. Estado inicial

Antes de implementar el Explorador será necesario inspeccionar el código existente.

No se deben reconstruir componentes ni modificar datos que ya satisfagan los requisitos.

La implementación debe respetar las dependencias con las páginas de detalle y favoritos, sin desarrollar anticipadamente funcionalidades que correspondan a otras especificaciones.