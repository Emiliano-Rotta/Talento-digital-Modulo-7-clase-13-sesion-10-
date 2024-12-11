const {
  crearCliente,
  crearDireccion,
  obtenerClientesConDirecciones,
  eliminarCliente,
} = require('./controllers/clienteController');

const main = async () => {
  try {
    // Crear clientes
    const cliente1 = await crearCliente('Juan', 'Pérez', 'juan.perez@example.com');
    const cliente2 = await crearCliente('María', 'Gómez', 'maria.gomez@example.com');

    // Crear direcciones
    await crearDireccion(cliente1.id, 'Calle 123', 'Santiago', 'Chile');
    await crearDireccion(cliente2.id, 'Av. Principal 456', 'Valparaíso', 'Chile');

    // Obtener clientes con sus direcciones
    const clientes = await obtenerClientesConDirecciones();
    console.log('Clientes con direcciones:', JSON.stringify(clientes, null, 2));

    // Eliminar un cliente y verificar el borrado en cascada
    await eliminarCliente(cliente1.id);
    const clientesPostEliminacion = await obtenerClientesConDirecciones();
    console.log('Clientes después de la eliminación:', JSON.stringify(clientesPostEliminacion, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
};

main();

