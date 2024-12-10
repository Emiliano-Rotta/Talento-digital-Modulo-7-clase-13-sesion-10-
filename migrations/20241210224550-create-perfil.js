module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Perfiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      direccion: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios', // Nombre de la tabla
          key: 'id'
        },
        onDelete: 'CASCADE', // Borrado en cascada
        onUpdate: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Perfiles');
  }
};
