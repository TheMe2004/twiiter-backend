const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Like = sequelize.define('Like', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', 
      key: 'id', 
    },
  },
  tweetId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Tweets', 
      key: 'id', 
    },
  },
}, {
  timestamps: true, 
});

module.exports = Like;
