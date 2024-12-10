

module.exports = (sequelize, DataTypes) => {
  const Perfil = sequelize.define('Perfil', {
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    usuarioId: DataTypes.INTEGER,
  });

  Perfil.associate = function (models) {
    Perfil.belongsTo(models.Usuario, { foreignKey: 'usuarioId' });
  };

  return Perfil;
};
