# Especificación: Detalle de experiencia

## 1. Objetivo

Definir los requisitos de la página de detalle de Wanderlust Explorer, que permite consultar la información completa de una experiencia turística seleccionada.

## 2. Requisitos oficiales

**Fuente:** 4Geeks Academy, *Wanderlust Explorer con React y Next.js*.

La página de detalle debe:

- Estar disponible en la ruta dinámica `/experiences/[id]`.
- Obtener el identificador de la experiencia desde la URL.
- Localizar la experiencia correspondiente en el dataset local.
- Mostrar la información completa de la experiencia seleccionada.

## 3. Comportamiento funcional

### 3.1. Ruta dinámica

- Cada experiencia debe poder consultarse mediante una URL que incluya su identificador.
- La página debe utilizar el parámetro `id` de la ruta para identificar la experiencia solicitada.
- La información mostrada debe corresponder al identificador recibido.

Ejemplo de estructura de URL:

```text
/experiences/123
```

El valor `123` es únicamente ilustrativo. Los identificadores reales serán los definidos en el dataset.

### 3.2. Obtención de datos

- Los datos deben obtenerse del dataset local existente en `src/data/experiences.ts`.
- La experiencia debe localizarse mediante su campo `id`.
- Se debe reutilizar la interfaz `Experience` existente.
- No se deben duplicar, regenerar ni modificar los datos para implementar esta página.

### 3.3. Información de la experiencia

La página debe mostrar la información completa de la experiencia seleccionada.

Según el enunciado oficial, cada experiencia contiene, como mínimo:

- `id`: identificador.
- `title`: título.
- `description`: descripción.
- `category`: categoría.
- `destination`: ciudad y país.
- `price`: precio.
- `rating`: valoración.
- `imageUrl`: imagen de la experiencia.

La presentación visual podrá organizar estos datos de acuerdo con el sistema de diseño existente.

### 3.4. Navegación

- El usuario debe poder acceder al detalle de una experiencia mediante su URL.
- La navegación interna debe seguir el comportamiento general de Next.js, sin recargas completas entre rutas.
- La `Navbar` debe mantenerse presente en la página.

### 3.5. Identificadores inexistentes

El enunciado oficial no define expresamente el comportamiento para identificadores inexistentes.

La gestión de este caso deberá establecerse como decisión técnica en `plan.md`, sin considerarla un requisito funcional adicional de 4Geeks.

## 4. Requisitos generales aplicables

Según el enunciado oficial:

- La aplicación debe ser responsiva en móvil y escritorio.
- Debe mantener coherencia visual entre páginas.
- La `Navbar` debe estar presente en todas las páginas.
- La navegación debe realizarse del lado del cliente.
- Los tipos e interfaces TypeScript deben utilizarse de forma consistente.
- Los componentes deben estar organizados de forma lógica.

El enunciado también exige utilizar `useEffect` correctamente en al menos un componente de la aplicación. Este requisito es global y no obliga a utilizarlo específicamente en la página de detalle.

## 5. Alcance

### Incluido

- Ruta dinámica `/experiences/[id]`.
- Lectura del identificador desde la URL.
- Consulta de la experiencia correspondiente en el dataset local.
- Visualización de toda la información de la experiencia.
- Integración con la navegación y el diseño existentes.
- Verificación del comportamiento responsivo.

### Excluido

- Creación o modificación del dataset.
- Modificación de la interfaz `Experience`.
- Implementación del catálogo y sus filtros.
- Implementación del estado compartido de favoritos.
- Implementación de la página de favoritos.
- Implementación del perfil.
- Conexión con APIs externas.
- Funcionalidades de reserva, compra o pago.

## 6. Criterios de aceptación

Los siguientes criterios permiten verificar los requisitos anteriores sin añadir funcionalidades al enunciado oficial.

- [ ] La ruta `/experiences/[id]` funciona correctamente.
- [ ] El identificador se obtiene de la URL.
- [ ] La experiencia se localiza en el dataset local mediante su ID.
- [ ] La página muestra los datos completos de la experiencia seleccionada.
- [ ] Diferentes identificadores muestran las experiencias correspondientes.
- [ ] La página reutiliza los datos y tipos existentes.
- [ ] La navegación interna funciona sin recargas completas.
- [ ] La `Navbar` está presente.
- [ ] La página es responsiva y mantiene coherencia visual.

## 7. Estado inicial

Antes de implementar la página de detalle será necesario inspeccionar el código existente.

No se deben reconstruir componentes ni modificar datos que ya satisfagan los requisitos.

La implementación debe respetar las dependencias con el Explorador y la futura gestión de favoritos.