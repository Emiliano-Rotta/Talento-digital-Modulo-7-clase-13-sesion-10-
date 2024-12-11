//Ejercicio

// Consigna:
// Queremos modelar un sistema de clientes donde cada cliente tenga asociada una única dirección.
// Crear las tablas Clientes y Direcciones con Sequelize utilizando una relación uno a uno.

// Configurar correctamente las migraciones y modelos.
// Crear controladores para insertar clientes y direcciones, y consultarlos con la relación asociada.
// Desde index.js, realizar las siguientes operaciones:

// Crear clientes con sus respectivas direcciones.
// Consultar clientes con sus direcciones asociadas.
// Eliminar un cliente y verificar el borrado en cascada de la dirección asociada.



//respuestas
//npm init -y
//npm install sequelize pg pg-hstore
//npm install --save-dev sequelize-cli
//npx sequelize-cli init
//configurar config/config.json

//npx sequelize-cli db:create

//npx sequelize-cli model:generate --name Cliente --attributes nombre:string,apellido:string,email:string
//npx sequelize-cli model:generate --name Direccion --attributes calle:string,ciudad:string,pais:string,clienteId:integer


//hacer cambos en migraciones y en modelos

// npx sequelize-cli db:migrate

//archivo controllers/clienteController.js:
