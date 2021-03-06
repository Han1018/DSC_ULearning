'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('opencourse_infos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true,
      },
      image: {
        type: Sequelize.STRING(200),
        defaultValue: null,
        allowNull: true,
      },
      title: {
        type: Sequelize.STRING(50),
        defaultValue: "",
        allowNull: false,
      },
      sourceName: {
        type: Sequelize.STRING(50),
        defaultValue: "",
        allowNull: true,
      },
      link: {
        type: Sequelize.STRING(200),
        defaultValue: "",
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        defaultValue: "",
        allowNull: true,
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('opencourse_infos');
  }
};
