### Instrucciones para trabajar con el proyecto

<h2>Correr los siguientes comandos</h2>

1. Instalar dependencias

`npm install`

2. Ejecutar contenedores de docker

`docker-compose -d up mysql`

`docker-compose -d up phpmyadmin`

o

`docker-compose up`

4. Ejecutar migraciones

`npm run migrate`
