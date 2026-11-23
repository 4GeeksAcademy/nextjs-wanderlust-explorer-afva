
# 🌍 Wanderlust Explorer

**Aplicación interactiva para descubrir y guardar experiencias turísticas alrededor del mundo.**

Proyecto desarrollado como parte del programa de Ingeniería de IA de **4Geeks Academy**, utilizando React, Next.js, TypeScript y Tailwind CSS.

## 1. Descripción del proyecto

Wanderlust Explorer es una aplicación web de descubrimiento de experiencias turísticas que permite explorar actividades en diferentes destinos, buscar experiencias según los intereses del usuario y guardar las favoritas.

El objetivo es desarrollar un MVP (*Minimum Viable Product*) con navegación entre páginas, componentes reutilizables, filtros dinámicos y gestión de estado mediante React.

El proyecto sigue una metodología **Spec-Driven Development (SDD)**, utilizando especificaciones funcionales y agentes de IA para organizar y controlar la implementación.

## 2. Tecnologías

| Tecnología | Función |
|---|---|
| Next.js | Framework de desarrollo y enrutamiento mediante App Router |
| React | Componentes interactivos y gestión del estado |
| TypeScript | Tipado estático |
| Tailwind CSS | Estilos y diseño responsive |
| ESLint | Análisis estático y calidad del código |
| Git y GitHub | Control de versiones |
| GitHub Codespaces | Entorno de desarrollo |

## 3. Funcionalidades requeridas

### Exploración de experiencias

- Dataset local de 100 experiencias turísticas generadas con IA.
- Visualización mediante tarjetas reutilizables.
- Información sobre destino, categoría, precio y valoración.
- Página de detalle individual.

### Búsqueda y filtros

- Búsqueda por título mediante expresiones regulares sin distinción entre mayúsculas y minúsculas.
- Filtros independientes y combinables por categoría y destino.
- Sincronización de los filtros con los parámetros de la URL.
- Posibilidad de compartir enlaces con filtros aplicados.

Ejemplo:

`/experiences?search=vela&category=Adventure&destination=Croatia`

### Favoritos

- Añadir y eliminar experiencias favoritas.
- Gestión del estado compartido mediante React `useState`.
- Página dedicada a favoritos.
- Contador de favoritos en el perfil.

No se requiere persistencia entre recargas de página.

## 4. Páginas de la aplicación

| Ruta | Descripción |
|---|---|
| `/` | Página principal con presentación y acceso al explorador |
| `/experiences` | Explorador con búsqueda y filtros |
| `/experiences/[id]` | Detalle de una experiencia |
| `/favorites` | Experiencias favoritas |
| `/profile` | Perfil simulado y resumen de favoritos |

## 5. Arquitectura del proyecto

El proyecto utiliza Next.js App Router y organiza el código de la aplicación dentro de `src/`.

La documentación del proceso de desarrollo se distribuye en archivos con responsabilidades diferenciadas.

```text
nextjs-wanderlust-explorer-afva/
├── AGENTS.md
├── README.md
├── docs/
│   ├── CONTEXT.md
│   ├── architecture.md
│   └── references/
│       ├── airbnb.png
│       ├── getyourguide.png
│       └── viator.png
├── rules/
│   └── coding.md
├── specs/
│   └── requirements.md
├── memory-bank/
│   ├── decisions.md
│   └── progress.md
├── public/
├── src/
│   ├── app/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   └── types/
├── package.json
└── tsconfig.json
```

*La estructura representa la organización objetivo. Algunas carpetas y funcionalidades se incorporarán progresivamente.*

## 6. Metodología de desarrollo

Se utiliza un enfoque **Spec-Driven Development (SDD)** para mantener la trazabilidad entre los requisitos, la implementación y las validaciones.

El flujo de trabajo es:

1. **Especificación:** identificar los requisitos y criterios de aceptación.
2. **Diseño técnico:** definir los componentes y archivos afectados.
3. **Implementación:** desarrollar la funcionalidad aprobada.
4. **Validación:** comprobar el cumplimiento de los requisitos.
5. **Seguimiento:** actualizar el estado del proyecto y registrar las decisiones relevantes.

### Documentación SDD

| Documento | Responsabilidad |
|---|---|
| `AGENTS.md` | Instrucciones operativas para agentes de IA |
| `docs/CONTEXT.md` | Contexto y alcance del proyecto |
| `docs/architecture.md` | Arquitectura y decisiones técnicas |
| `rules/coding.md` | Convenciones de desarrollo |
| `specs/requirements.md` | Requisitos funcionales y criterios de aceptación |
| `memory-bank/decisions.md` | Registro de decisiones aprobadas |
| `memory-bank/progress.md` | Estado de avance y bloqueos |

El enunciado oficial de 4Geeks Academy constituye la fuente de verdad de los requisitos.

## 7. Instalación y ejecución

### Requisitos previos

- Node.js compatible con la versión instalada de Next.js.
- npm.
- Git.

### Clonar el repositorio

```bash
git clone https://github.com/afva/nextjs-wanderlust-explorer-afva.git
cd nextjs-wanderlust-explorer-afva
```

### Instalar dependencias

```bash
npm install
```

### Iniciar el servidor de desarrollo

```bash
npm run dev
```

Abrir http://localhost:3000 o el puerto correspondiente de GitHub Codespaces.

### Validar el proyecto

```bash
npm run lint
npm run build
```

## 8. Design References

Las siguientes plataformas sirven como referencias visuales para el diseño de Wanderlust Explorer.

Se utilizan como inspiración para la organización del catálogo, la presentación de experiencias y la navegación. El objetivo es adaptar patrones de diseño existentes, manteniendo una identidad visual propia.

### 8.1 Airbnb Experiences

**Referencia:** https://www.airbnb.com/experiences

**Elementos de inspiración:**

- Tarjetas con fotografías destacadas.
- Diseño limpio y jerarquía visual clara.
- Presentación de destinos, precios y valoraciones.
- Navegación centrada en el descubrimiento de experiencias.

**Aplicación en Wanderlust Explorer:**

Inspiración para el diseño de las tarjetas de experiencias, la distribución de elementos visuales y la presentación del catálogo.

**Captura de referencia:**

![Interfaz de Airbnb Experiences](docs/references/airbnb.png)

### 8.2 GetYourGuide

**Referencia:** https://www.getyourguide.com/

**Elementos de inspiración:**

- Organización del catálogo por actividades y destinos.
- Herramientas de búsqueda y filtrado.
- Presentación de experiencias mediante cuadrículas de tarjetas.
- Distribución clara de imágenes, títulos e información relevante.

**Aplicación en Wanderlust Explorer:**

Inspiración para la estructura del explorador, la barra de búsqueda y los filtros por categoría y destino.

**Captura de referencia:**

![Interfaz de GetYourGuide](docs/references/getyourguide.png)

### 8.3 Viator

**Referencia:** https://www.viator.com/

**Elementos de inspiración:**

- Presentación de precios y valoraciones.
- Organización de la información sobre las actividades.
- Estructura de las páginas de detalle.
- Jerarquía de títulos, descripciones e información complementaria.

**Aplicación en Wanderlust Explorer:**

Inspiración para las páginas individuales de experiencias y la presentación de sus características.

**Captura de referencia:**

![Interfaz de Viator](docs/references/viator.png)

### Criterios de adaptación

Las referencias anteriores orientan el diseño visual y la experiencia de usuario.

Wanderlust Explorer no pretende reproducir literalmente estas interfaces ni incorporar funcionalidades ajenas a los requisitos del proyecto.

Las capturas se conservan como documentación visual para facilitar el análisis del diseño durante el desarrollo con asistentes de IA.

## 9. Estado del proyecto

El desarrollo se realiza de forma incremental, siguiendo las tareas definidas por 4Geeks Academy.

La fuente de seguimiento es:

`memory-bank/progress.md`

El estado de las funcionalidades debe verificarse en el repositorio antes de considerarlas completadas.

## 10. Entrega

La entrega del proyecto consiste en compartir el enlace al repositorio público de GitHub con el código desarrollado y las funcionalidades requeridas.

El despliegue en Vercel es opcional y no constituye un requisito obligatorio.

---