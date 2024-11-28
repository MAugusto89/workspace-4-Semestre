// Define a model User
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

//Define um nodo modelo chamado 'Tutorial' com os campos 'title' e 'description'
const Tutorial = sequelize.define("Tutorial", {
  //Define o campo 'title' como uma string que não pode ser nula
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  //Define o campo 'Description' como uma string, mas permite que seja nula
  description: {
    type: DataTypes.TEXT,
  },
});

module.exports = Tutorial;