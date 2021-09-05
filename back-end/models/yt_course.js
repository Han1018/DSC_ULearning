'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class yt_course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  yt_course.init({
    firstName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'yt_course',
  });
  return yt_course;
};