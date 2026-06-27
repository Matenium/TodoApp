#!/usr/bin/env bash
set -euo pipefail

mvn -f backend -DskipTests clean package
exec java -Dserver.port=${PORT:-8080} -jar backend/target/todo-backend-0.0.1-SNAPSHOT.jar
