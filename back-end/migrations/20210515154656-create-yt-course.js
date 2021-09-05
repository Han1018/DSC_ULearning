'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('yt_courses', {
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
        type: Sequelize.STRING(200),
        defaultValue: "",
        allowNull: false,
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
      type: {
        type: Sequelize.STRING(50),
        defaultValue: "",
      },
      major: {
        type: Sequelize.STRING(50),
        defaultValue: "",
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
    await queryInterface.dropTable('yt_courses');
  }
};