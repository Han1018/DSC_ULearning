const Sequelize = require('sequelize');
module.exports = (sequelize, Datatypes) => {
  const OpenCourse = sequelize.define('opencourse_infos', {
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
    subj: {
      type: Sequelize.STRING(50),
      defaultValue: "",
    },
    major: {
      type: Sequelize.STRING(50),
      defaultValue: "",
    },
    sub_major: {
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
  OpenCourse.sync({ force: false });
  return OpenCourse;
}