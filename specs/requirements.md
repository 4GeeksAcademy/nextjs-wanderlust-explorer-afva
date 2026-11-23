
# Requisitos — Wanderlust Explorer

## Fuente de los requisitos

**Proyecto:** Wanderlust Explorer con React y Next.js  
**Fuente:** Enunciado oficial de 4Geeks Academy  
**Alcance:** MVP de una aplicación interactiva para descubrir y guardar experiencias turísticas.

Este documento recoge los requisitos del enunciado oficial, manteniendo su organización.

El enunciado oficial constituye la fuente de verdad. Las decisiones de arquitectura, implementación y seguimiento se documentan en los archivos correspondientes del proyecto.

---

## 1. Setup y dataset

- [ ] Inicializa el proyecto desde cero con `create-next-app` (TypeScript + Tailwind + App Router).
- [ ] Usa un asistente de código con IA para generar el array de 100 experiencias y guárdalo como `src/data/experiences.ts`.
- [ ] Define una interfaz `Experience` en TypeScript con la forma de los datos y úsala en todo el proyecto.
- [ ] Añade una sección `## Design References` en tu `README.md` con enlaces o capturas de 2-3 interfaces reales que hayan inspirado tu diseño.

### Estructura de los datos

Cada experiencia debe contener, como mínimo:

| Campo | Descripción |
|---|---|
| `id` | Identificador de la experiencia |
| `title` | Título |
| `description` | Descripción |
| `category` | Categoría |
| `destination` | Ciudad y país |
| `price` | Precio |
| `rating` | Valoración |
| `imageUrl` | URL de imagen; se permiten placeholders |

Categorías permitidas:

- Adventure
- Culture
- Food
- Wellness
- Nature

---

## 2. Páginas y enrutamiento

- [ ] Crea la **Home** (`/`) con una sección hero y un botón que navega a `/experiences`.
- [ ] Crea el **Explorador** (`/experiences`) con las 100 tarjetas de experiencias en una cuadrícula.
- [ ] Crea la página de **Detalle** (`/experiences/[id]`) que lee el ID desde la URL y muestra el contenido completo de esa experiencia.
- [ ] Crea la página de **Favoritos** (`/favorites`) que muestra solo las experiencias marcadas como favoritas.
- [ ] Crea la página de **Perfil** (`/profile`) con un perfil de usuario simulado y el contador de favoritos guardados.

---

## 3. Búsqueda y filtros

- [ ] Añade una barra de búsqueda en el Explorador que filtre experiencias por título.
- [ ] Usa una expresión regular sin distinción entre mayúsculas y minúsculas para comparar el término con el título de cada experiencia.
- [ ] Añade un filtro de categoría (dropdown o grupo de botones) con las cinco categorías disponibles.
- [ ] Añade un filtro de destino (dropdown o búsqueda) que filtre por ciudad o país de destino.
- [ ] Los filtros activos y el término de búsqueda deben almacenarse como parámetros de la URL usando `useSearchParams` y `usePathname` de Next.js.
- [ ] Al cargar la página con parámetros existentes en la URL, los inputs de búsqueda y filtros deben prerrellenarse con esos valores.

### Comportamiento requerido

La búsqueda debe utilizar una coincidencia mediante regex case-insensitive.

Ejemplo del enunciado:

```typescript
new RegExp(term, 'i').test(experience.title)
```

Los filtros de categoría y destino deben funcionar de forma independiente y combinarse correctamente con la búsqueda.

Los resultados deben reflejar los parámetros presentes en la URL.

Ejemplo de URL:

```text
/experiences?search=vela&category=adventure&destination=Croatia
```

---

## 4. Favoritos

- [ ] Añade un icono de corazón (toggle) a cada tarjeta de experiencia.
- [ ] Guarda la lista de IDs favoritos en un `useState` a nivel compartido y pásala hacia abajo como props.
- [ ] El icono de corazón debe reflejar visualmente si la experiencia está en favoritos o no.

### Restricciones

- No se requiere persistencia de favoritos entre recargas.
- El uso de `localStorage` está fuera del alcance del proyecto.

---

## 5. Componentes y hooks

- [ ] Crea, como mínimo, los componentes `ExperienceCard`, `SearchBar`, `FilterBar` y `Navbar`.
- [ ] Usa `useEffect` en al menos un componente.
- [ ] Crea al menos un custom hook que encapsule la lógica de filtrado.

### Ejemplos proporcionados en el enunciado

Posibles usos de `useEffect`:

- Sincronizar los resultados filtrados cuando cambien los parámetros de la URL.
- Actualizar el título del documento en la página de detalle.

Posibles custom hooks:

- `useExperiences`
- `useFilters`

Estos son ejemplos, no implementaciones obligatorias.

---

## 6. UI y calidad

- [ ] La aplicación debe ser responsiva (móvil y escritorio).
- [ ] El Explorador debe mostrar el mensaje **"No se encontraron resultados"** cuando los filtros no devuelvan ningún resultado.
- [ ] La Navbar debe estar presente en todas las páginas y mostrar estilos de enlace activo usando `usePathname`.

### Restricción técnica

No se permite utilizar bibliotecas externas de gestión de estado como Redux o Zustand.

El estado debe gestionarse mediante `useState` nativo de React y compartirse mediante props o custom hooks.

---

## 7. Criterios de evaluación oficiales

Los siguientes criterios corresponden al apartado **"Qué vamos a evaluar"** del enunciado.

- [ ] La aplicación tiene al menos cinco páginas distintas con navegación del lado del cliente, sin recargas completas entre rutas.
- [ ] La búsqueda filtra resultados por título utilizando coincidencia con regex.
- [ ] Los filtros de categoría y destino funcionan de forma independiente y se combinan correctamente con la búsqueda.
- [ ] Los filtros activos y el término de búsqueda se reflejan en la URL como query params.
- [ ] Al cargar una página con query params existentes, los inputs están prerrellenados y los resultados ya están filtrados.
- [ ] `useEffect` se utiliza correctamente, con arrays de dependencias adecuados, sin bucles infinitos ni dependencias faltantes.
- [ ] `useState` se utiliza para gestionar favoritos y se pasa correctamente como props.
- [ ] Existe al menos un custom hook que encapsula lógica con significado.
- [ ] Los componentes están divididos de forma lógica; ningún archivo contiene toda la aplicación.
- [ ] Los tipos e interfaces de TypeScript están definidos y se utilizan de forma consistente.
- [ ] La aplicación es responsiva y visualmente coherente entre páginas.
- [ ] Las referencias de diseño están documentadas en el README.

**Nota oficial:** La persistencia de favoritos entre recargas de página no se evalúa. El uso de `localStorage` está fuera del alcance.

---

## 8. Entrega

1. Asegúrate de que todo el trabajo está commiteado y subido al repositorio de GitHub.
2. Comparte la URL del repositorio con el instructor siguiendo sus instrucciones de entrega.
3. Si has desplegado la aplicación, por ejemplo en Vercel, incluye la URL en la descripción del repositorio.

El despliegue es opcional y se considera un valor añadido, no un requisito obligatorio.

---

## 9. Seguimiento

Este documento define los requisitos oficiales del proyecto.

Las casillas anteriores representan requisitos pendientes de verificación y no implican necesariamente que las funcionalidades no estén implementadas.

El seguimiento de tareas completadas, en desarrollo o bloqueadas se realiza en:

`memory-bank/progress.md`

Las decisiones técnicas y arquitectónicas se registran en:

- `docs/architecture.md`
- `memory-bank/decisions.md`

No se deben añadir nuevos requisitos funcionales a este documento sin una fuente que los justifique.
