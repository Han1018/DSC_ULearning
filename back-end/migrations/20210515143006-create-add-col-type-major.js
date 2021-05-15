'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'opencourse_infos',
      'type',
      Sequelize.STRING(50),
    );
    await queryInterface.addColumn(
      'opencourse_infos',
      'major',
      Sequelize.STRING(50),
    );
  },
};