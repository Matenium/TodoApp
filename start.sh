#!/usr/bin/env bash
set -euo pipefail

echo "[1/3] Instalando dependencias frontend"
cd frontend
npm install

echo "[2/3] Construyendo frontend"
npm run build

echo "[2.5/3] Copiando frontend al backend"
rm -rf ../backend/src/main/resources/static
mkdir -p ../backend/src/main/resources/static
cp -R dist/todo-frontend/* ../backend/src/main/resources/static/

cd ..
echo "[3/3] Empaquetando y arrancando backend"
mvn -f backend -DskipTests clean package
exec java -Dserver.port=${PORT:-8080} -jar backend/target/todo-backend-0.0.1-SNAPSHOT.jar
