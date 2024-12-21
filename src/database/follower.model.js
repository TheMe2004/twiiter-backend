const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Follow = sequelize.define('Follow', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  followingId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', 
      key: 'id', 
    }, 
  },
  followerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', 
      key: 'id', 
    },
  },
}, {
  timestamps: true, 
});

module.exports = Follow;
