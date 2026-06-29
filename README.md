# Todo App (Spring Boot + Angular)

Estructura del proyecto:

- backend/ (Spring Boot)
- frontend/ (Angular)

Ver carpetas `backend/README.md` y `frontend/README.md` para instrucciones por separado.

## Requisitos previos

Para compilar y ejecutar el proyecto necesitas tener instalado:

- **Java JDK 17** (requerido por Spring Boot 3)
- **Spring Boot** 3.1.6 (Web, Data JPA, Validation, Actuator)
- **Maven 3.9+** (para compilar el backend)
- **Node.js 20+** y **Angular CLI** (para el frontend)

## Cómo ejecutar

### Backend

cd backend
mvn clean package
java -jar target/todo-backend-0.0.1-SNAPSHOT.jar

### Frontend

cd frontend
npm install
npm run build

### Test

cd backend
mvn test

Ejecuta 5 pruebas de integración que validan los endpoints de la API
(crear, listar, completar y eliminar tareas) y la validación de título vacío.
