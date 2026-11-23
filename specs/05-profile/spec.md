# Especificación: Perfil de usuario

## 1. Objetivo

Definir los requisitos de la página de Perfil de Wanderlust Explorer, que permite visualizar información simulada de un usuario y consultar el número de experiencias marcadas como favoritas.

## 2. Requisitos oficiales

**Fuente:** 4Geeks Academy, *Wanderlust Explorer con React y Next.js*.

La página de Perfil debe:

- Estar disponible en la ruta `/profile`.
- Mostrar un perfil de usuario simulado.
- Mostrar el número de experiencias marcadas como favoritas.

## 3. Comportamiento funcional

### 3.1. Página de Perfil

- El usuario puede acceder a la página mediante la ruta `/profile`.
- La página muestra información de un usuario ficticio.
- No requiere autenticación ni conexión con un servicio externo.

### 3.2. Información del usuario

- El perfil debe mostrar información simulada que permita identificar visualmente al usuario.
- Los datos serán estáticos y ficticios.
- La presentación se adaptará al sistema de diseño existente.

El enunciado oficial no especifica los campos concretos del perfil. Estos deberán definirse como una decisión de presentación durante la planificación.

### 3.3. Contador de favoritos

- La página debe mostrar el número de experiencias marcadas como favoritas.
- El contador debe obtenerse del estado compartido de favoritos implementado en `04-favorites`.
- El valor mostrado debe corresponder al número real de identificadores guardados en dicho estado.
- No debe utilizarse un valor fijo ni mantenerse un contador independiente.

### 3.4. Sincronización del estado

- Las experiencias marcadas desde el Explorador deben contabilizarse en el Perfil.
- Las experiencias desmarcadas deben dejar de contabilizarse.
- El contador debe reflejar el estado actual de favoritos durante la navegación dentro de la aplicación.

## 4. Requisitos generales aplicables

Según el enunciado oficial:

- La aplicación debe ser responsiva en móvil y escritorio.
- Debe mantener coherencia visual entre páginas.
- La `Navbar` debe estar presente en todas las páginas.
- La navegación debe realizarse del lado del cliente.
- Los componentes deben estar organizados de forma lógica.
- Los tipos e interfaces TypeScript deben utilizarse de forma consistente.

## 5. Alcance

### Incluido

- Ruta `/profile`.
- Visualización de un perfil de usuario simulado.
- Información ficticia del usuario.
- Contador de experiencias favoritas.
- Integración con el estado compartido de favoritos.
- Diseño responsivo y coherente con la aplicación.

### Excluido

- Autenticación y registro.
- Edición del perfil.
- Gestión de contraseñas.
- Almacenamiento de información personal.
- Conexión con bases de datos.
- Integración con servicios externos.
- Persistencia de favoritos entre recargas.
- Modificación del dataset de experiencias.
- Implementación de nuevas funcionalidades de favoritos.

## 6. Criterios de aceptación

Los siguientes criterios permiten verificar los requisitos oficiales sin añadir funcionalidades adicionales.

- [ ] La ruta `/profile` funciona correctamente.
- [ ] La página muestra un perfil de usuario simulado.
- [ ] La información del usuario es ficticia.
- [ ] Se muestra el número de experiencias favoritas.
- [ ] El contador utiliza el estado compartido de favoritos.
- [ ] El contador muestra cero cuando no existen favoritos.
- [ ] El contador refleja las experiencias marcadas y desmarcadas.
- [ ] No existe un contador independiente ni un valor fijo.
- [ ] La `Navbar` está presente e identifica la ruta activa.
- [ ] La página es responsiva y mantiene coherencia visual.

## 7. Estado inicial

Antes de implementar la página será necesario inspeccionar el código existente y verificar la disponibilidad del estado compartido de favoritos.

No se deben reconstruir componentes ni modificar funcionalidades que ya satisfagan los requisitos.

La implementación debe reutilizar la arquitectura de estado definida en `04-favorites`.