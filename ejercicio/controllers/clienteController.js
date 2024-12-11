const { Cliente, Direccion } = require('../models');

// Crear un cliente
async function crearCliente(nombre, apellido, email) {
  return await Cliente.create({ nombre, apellido, email });
}

// Crear una dirección asociada a un cliente
async function crearDireccion(clienteId, calle, ciudad, pais) {
  return await Direccion.create({ clienteId, calle, ciudad, pais });
}

// Obtener clientes con sus direcciones
async function obtenerClientesConDirecciones() {
  return await Cliente.findAll({ include: Direccion });
}

// Eliminar un cliente y su dirección
async function eliminarCliente(clienteId) {
  await Cliente.destroy({ where: { id: clienteId } });
  console.log(`Cliente con ID ${clienteId} eliminado.`);
}

module.exports = {
  crearCliente,
  crearDireccion,
  obtenerClientesConDirecciones,
  eliminarCliente,
};

