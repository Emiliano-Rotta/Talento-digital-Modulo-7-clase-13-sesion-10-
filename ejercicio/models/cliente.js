module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  Cliente.associate = function (models) {
    Cliente.hasOne(models.Direccion, {
      foreignKey: 'clienteId',
      onDelete: 'CASCADE', // Borrado en cascada
    });
  };

  return Cliente;
};
