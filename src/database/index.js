const { Sequelize } = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(config.databaseurl);


sequelize.authenticate()
  .then(() => console.log('Database connection successful'))
  .catch(err => console.error('Database connection failed:', err));

sequelize.sync({ alter: true }) 
  .then(() => console.log('Database schema updated'))
  .catch(err => console.error('Database sync failed:', err));

module.exports = sequelize;
