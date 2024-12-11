module.exports = (sequelize, DataTypes) => {
  const Direccion = sequelize.define('Direccion', {
    calle: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    pais: DataTypes.STRING,
    clienteId: DataTypes.INTEGER,
  });

  Direccion.associate = function (models) {
    Direccion.belongsTo(models.Cliente, {
      foreignKey: 'clienteId',
    });
  };

  return Direccion;
};
