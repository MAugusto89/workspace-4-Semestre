const sequelize = require('sequelize');

// Initialize sequelize
const sequelize = new Sequelize({dialect: 'sqlite', storage: 'database.sqlite'});
module.exports = sequelize;