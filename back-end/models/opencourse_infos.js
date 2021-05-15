'use strict';
const { Sequelize, Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('opencourse_infos', {
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
  })
};