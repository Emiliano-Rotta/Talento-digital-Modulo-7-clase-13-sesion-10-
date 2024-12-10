// Repaso de la clase pasada

// Relaciones unos a muchos

//Usuarios.hasMany(Pedido, { onDelete: 'CASCADE' })
//Pedido.belongsTo(Usuario)


//---------------------------------
// teoria de relacion de muchos a muchos
//un curso tiene muchos estudiantes y un estudiantes se puede anotar en muchos cursos
// const { Sequelize, DataTypes } = require('sequelize')
// const sequelize = new Sequelize('sqlite::memory:');

// //Models
// const Estudiantes = sequelize.define('Estudiante', {
//     nombre: { type: DataTypes.STRING, allowNull: false },
// })
// const Curso = sequelize.define('Curso', {
//     titulo: { type: DataTypes.STRING, allowNull: false },
// });
// // Tabla intermedia
// const EstudianteCurso = sequelize.define('EstudianteCurso', {
//     fechaInscripcion: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
// });

// //Lo propio de la relacion de muchso a muchos. 
// Estudiantes.belongsToMany(Curso, {through: EstudianteCurso})
// Curso.belongsToMany(Estudiantes, {through: EstudianteCurso})


// teoria de relacion de unos a unos
// un usuario tiene un unica direccion de email, y una direccion de email, tiene un unico usuario
//Models
// const Usuario = sequelize.define('Usuario', { nombre: DataTypes.STRING });
// const Direccion = sequelize.define('Direccion', { url: DataTypes.STRING });
// Usuario.hasOne(Direccion)
// Direccion.belongsTo(Usuario)

// un ejercicio de unos a unos 

//npm init -y
//npm install sequelize pg pg-hstore
//npm install --save-dev sequelize-cli
//npx sequelize-cli init
//configurar config/config.json

//npx sequelize-cli db:create

// npx sequelize-cli model:generate --name Usuario --attributes nombre:string,email:string
// npx sequelize-cli model:generate --name Perfil --attributes direccion:string,telefono:string,usuarioId:integer

// Sequelize, no entiende a simple vista las relaciones, por lo que es lo que tenemos que agregar nosotros.
//agregamos la referencias a la migraciones de perfil 
// usuarioId: {
//     type: Sequelize.INTEGER,
//     references:{
//       model:'Usuarios', //Nombre de la tabla
//       key: 'id'
//     },
//     onDelete: 'CASCADE',
//     onUpdate: 'CASCADE'
//   },

// luego corro esto npx sequelize-cli db:migrate

//modificar los modelos perfil y usuario y concluimos la etapade configuracion de sequelize.

// creamos controller e index.js

const { crearUsuarioConPerfil, obtenerUsuariosConPerfil } = require('./controllers/usuarioController');

const main = async () => {
    try {
        // Crear usuarios con perfil
        await crearUsuarioConPerfil('Juan Pérez', 'juan@example.com', 'Calle Falsa 123', '555-1234');
        await crearUsuarioConPerfil('Ana Gómez', 'ana@example.com', 'Av. Siempreviva 456', '555-5678');

        // Consultar usuarios con perfil
        const usuarios = await obtenerUsuariosConPerfil();
        console.log('Usuarios con sus perfiles:', JSON.stringify(usuarios, null, 2));
    } catch (error) {
        console.error('Error:', error);
    }
};

main();




//node index.js

//---------------------------------------------------------------
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
