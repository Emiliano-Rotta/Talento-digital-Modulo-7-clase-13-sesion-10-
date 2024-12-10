const { Usuario, Perfil } = require('../models');

// Crear un usuario con perfil
async function crearUsuarioConPerfil(nombre, email, direccion, telefono) {
    const usuario = await Usuario.create(
        {
            nombre,
            email,
            Perfil: {
                direccion,
                telefono,
            },
        },
        {
            include: [Perfil], // Incluir el modelo relacionado
        }
    );
    return usuario;
}

// Obtener usuarios con perfil
async function obtenerUsuariosConPerfil() {
    return await Usuario.findAll({ include: Perfil });
}

module.exports = {
    crearUsuarioConPerfil,
    obtenerUsuariosConPerfil,
};
