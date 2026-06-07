# ProjectoCinema 🎬

Aplicación web desarrollada como **proyecto final de curso DAW2 (2020)**. Permite buscar y gestionar películas consumiendo la API de **TMDb (The Movie Database)**, con sistema de usuarios, favoritos, comentarios y puntuaciones.

## 🚀 Repositorio

[Ver proyecto en GitHub](https://github.com/JonatanGil/project)

---

## 🛠️ Tecnologías

- **Node.js + Express** — Servidor y API REST
- **Handlebars (hbs)** — Motor de plantillas del lado del servidor
- **MongoDB + Mongoose** — Base de datos NoSQL en la nube (MongoDB Atlas)
- **CoreUI** — Framework CSS para la interfaz
- **TMDb API** — Fuente de datos de películas
- **Cookie-parser** — Gestión de sesiones mediante cookies
- **Base64** — Almacenamiento de imágenes de perfil
- **node-fetch** — Peticiones HTTP a la API externa
- **Morgan** — Logger de peticiones HTTP
- **Nodemon** — Recarga automática en desarrollo

---

## 📋 Funcionalidades

- 🔐 **Autenticación** — Registro e inicio/cierre de sesión en la misma página, sin redirecciones. Sesión gestionada con cookies httpOnly
- 👤 **Perfil de usuario** — Ver películas favoritas y películas vistas. Foto de perfil en Base64
- ⚙️ **Ajustes de cuenta** — Cambiar nombre, contraseña e imagen de perfil
- 🎥 **Buscador de películas** — Búsqueda en tiempo real desde la API de TMDb con paginación
- 🏠 **Home** — Últimas películas ordenadas por fecha de estreno con paginación
- 🏆 **Top películas** — Películas ordenadas por puntuación media con paginación
- 🎬 **Detalle de película** — Información completa de cada película
- ⭐ **Favoritos** — Añadir/quitar películas de tu lista de favoritos (toggle)
- 👁️ **Películas vistas** — Marcar películas como vistas (toggle)
- 💬 **Comentarios** — Añadir comentarios en cada película, asociados al usuario
- 👍 **Puntuaciones** — Votar películas con una puntuación personalizada
- 📄 **Paginación** — Navegación paginada en home, top películas y búsqueda

---

## ⚙️ Instalación y uso

### Requisitos previos

- Node.js >= 12
- Cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) con un cluster creado
- API Key de [TMDb](https://www.themoviedb.org/documentation/api)

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/JonatanGil/project.git

# Entrar en la carpeta
cd project

# Instalar dependencias
npm install

# Configurar la conexión a MongoDB en config/db.js
# Sustituir la URL con tus credenciales de MongoDB Atlas:
# mongodb+srv://<usuario>:<password>@cluster0.xxxxx.mongodb.net/...

# Iniciar en modo desarrollo
npm run dev

# O iniciar en producción
node server.js
```

La app estará disponible en `http://localhost:3001`

---

## 📁 Estructura del proyecto

```
project/
├── app/
│   ├── controllers/
│   │   ├── auth.controller.js        # Registro, login, logout, middleware isLoggedIn
│   │   ├── comment.controller.js     # Añadir, eliminar y obtener comentarios
│   │   ├── favorite.controller.js    # Gestión de favoritos (toggle)
│   │   ├── movies.controller.js      # Peticiones a la API de TMDb
│   │   ├── pagination.controller.js  # Generación de paginación HTML
│   │   ├── settings.controller.js    # Guardar cambios de perfil
│   │   ├── usersViews.controller.js  # Renderizado de vistas principales
│   │   ├── viewed.controller.js      # Gestión de películas vistas (toggle)
│   │   └── vote.controller.js        # Sistema de puntuaciones
│   ├── models/
│   │   ├── comment.model.js          # Schema Mongoose de comentarios
│   │   └── users.model.js            # Schema Mongoose de usuarios
│   └── routes/
│       └── index.routes.js           # Definición de todas las rutas
├── config/
│   └── db.js                         # URL de conexión a MongoDB Atlas
├── public/                           # Assets estáticos (CSS, JS, imágenes)
├── views/
│   ├── home.hbs                      # Últimas películas
│   ├── topMovies.hbs                 # Top películas por puntuación
│   ├── search.hbs                    # Resultados de búsqueda
│   ├── detailMovie.hbs               # Detalle de película
│   ├── login.hbs                     # Login y registro
│   ├── register.hbs                  # Registro de usuario
│   ├── profile.hbs                   # Perfil con favoritos y vistas
│   ├── settings.hbs                  # Ajustes de cuenta
│   ├── api.hbs                       # Información sobre la API
│   └── partials/
│       ├── headAttributes.hbs        # Meta tags y head HTML
│       ├── header.hbs                # Cabecera de la web
│       └── navSidebar.hbs            # Menú lateral de navegación
├── server.js                         # Punto de entrada, configuración Express
├── Procfile                          # Configuración para despliegue en Heroku
├── package.json
└── .gitignore
```

---

## 🗃️ Modelos de datos

### Usuario
| Campo | Tipo | Descripción |
|-------|------|-------------|
| name | String | Nombre único de usuario |
| password | String | Contraseña |
| email | String | Email único |
| image | String | Foto de perfil en Base64 |
| favorite | [Number] | IDs de películas favoritas |
| viewedMovie | [Number] | IDs de películas vistas |
| scores | [] | Puntuaciones dadas a películas |

### Comentario
| Campo | Tipo | Descripción |
|-------|------|-------------|
| idMovie | String | ID de la película |
| idUser | String | ID del usuario |
| comment | String | Texto del comentario |
| nameUser | String | Nombre del usuario |

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún bug o tienes alguna mejora, abre un issue o un pull request.

---

## 📄 Licencia

Este proyecto está bajo la licencia ISC.

---

## 👤 Autor

**Jonathan Gil Galera**  
GitHub: [@JonatanGil](https://github.com/JonatanGil)
