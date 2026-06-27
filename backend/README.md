# Backend (Spring Boot) - Todo App

Este backend es una aplicación Spring Boot que expone una API REST para manejar tareas (Task).

Comandos rápidos:

```bash
# Compilar
mvn -f backend clean package

# Ejecutar
mvn -f backend spring-boot:run
```

Endpoints principales:

- GET /api/tasks : listar
- POST /api/tasks : crear (JSON body con `title`, `description`)
- PATCH /api/tasks/{id}/complete?completed=true|false : marcar completada
- DELETE /api/tasks/{id} : eliminar

Base de datos:

- Por defecto usa H2 en memoria (archivo `application.properties`).
- Para usar SQLite: en `src/main/resources/application.properties` comenta las líneas H2 y descomenta/ajusta las líneas marcadas para SQLite.

Notas:

- Validación: `title` no puede estar vacío.
- CORS habilitado para `http://localhost:4200` (Angular dev server).
