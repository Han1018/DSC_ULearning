
const Sequelize = require('sequelize');
module.exports = (sequelize, Datatypes) => {
  const majors = sequelize.define('majors', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    major: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      default: "Find in wiki"
    },

    subj: {
      type: Sequelize.TEXT,
      default: "Find in wiki"
    },
  },
    {
      // 不需要createdAt字段
      'createdAt': false,

      // 将updatedAt字段改个名
      'updatedAt': false,
    },
  );
  majors.sync({ force: false });
  return majors;
}