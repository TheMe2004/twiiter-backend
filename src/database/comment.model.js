const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Comment = sequelize.define('Comment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tweetId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,  
    },
    parentid: {
     type: DataTypes.STRING,
      allowNull: true
    }
}, { 
    timestamps: true, 
});

module.exports = Comment;
