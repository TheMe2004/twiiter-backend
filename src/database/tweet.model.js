const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Tweet = sequelize.define('Tweet', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true, 
  },
  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false, 
    references: {
      model: 'Users',
      key: 'id',
    },
  },
});

module.exports = Tweet;
