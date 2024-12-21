const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, 
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, 
    validate: {
      isEmail: true, 
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bio: {
    type: DataTypes.TEXT, 
    allowNull: true, 
  },
  profileImage: {
    type: DataTypes.STRING,
    allowNull: true, 
  },
  bannerImage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, { 
  timestamps: true, 
});

module.exports = User;
