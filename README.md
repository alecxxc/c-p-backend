# c-p-backend

API de **procesamiento de pagos** con formularios seguros, autenticación de administradores y gestión de transacciones.

---

## 🧩 Descripción general

Esta aplicación backend está diseñada para gestionar pagos, transacciones y usuarios administradores de manera segura.  
Incluye:

- Formularios seguros para procesar pagos.
- Autenticación para los administradores del sistema.
- Registro y administración de transacciones.
- Middleware de validaciones y autorización.
- Módulos utilitarios para tareas comunes (por ejemplo, manejo de errores, validaciones).

---


A continuación, una breve descripción de cada carpeta:

| Carpeta / archivo | Propósito / contenido |
|-------------------|-------------------------|
| `config/`         | Configuraciones de variables y conexión a base de datos.  |
| `controller/`     | Controlador que manejan la lógica, la solicitud y la respuesta. |
| `middlewares/`    | Funciones intermediaria de autenticación. |
| `models/`         | Definición de entidades / esquemas de datos (transacciones, usuario administrador). |
| `routes/`         | Definición de rutas/URLs. |
| `utils/`          | Funcion reutilizable para generar el token. |
| `server.js`       | Punto de entrada de la aplicación: configuración del servidor, middlewares globales, inicialización. |
| `package.json` / `package-lock.json` | Dependencias, scripts, versiones. |

---

## Endpoints

| Método |       Path                  | Utilidad                    | 
| ------ | --------------------------- | --------------------------- |
| POST   | /api/transaction            | Creación de transacción     |
| POST   | /api/admin/login            | Inicio de sesión            |
| GET    | /api/admin/viewtransactions | Ver todas las transacciones |

## 🚀 Instalación y ejecución

### Requisitos previos

- Node.js (versión X en adelante)  
- npm o yarn  
- Base de datos -> MongoDB Atlas. Deberás crear una cuenta y utilizar un driver para conectar con la API  
- Variables de entorno configuradas (mira `config/`)

### Pasos para ejecutar

```bash
# Clona el repositorio
git clone https://github.com/alecxxc/c-p-backend.git
cd c-p-backend

# Instala dependencias
npm install

# Configura las variables de entorno
MONGO_URI
JWT_SECRET

# Inicia la aplicación
npm start



