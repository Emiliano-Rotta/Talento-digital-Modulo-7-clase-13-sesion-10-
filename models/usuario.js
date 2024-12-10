module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  Usuario.associate = function (models) {
    Usuario.hasOne(models.Perfil, { 
      foreignKey: 'usuarioId', 
      onDelete: 'CASCADE', 
      onUpdate: 'CASCADE'
    });
  };

  return Usuario;
};
