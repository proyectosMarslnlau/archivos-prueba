//Importamos SEQUELIZE
const Sequelize = require('sequelize');

//Importamos las configuraciones de BASE DE DATOS
const db = require('../config/db');

//Denominamos las base de datos
const Client = db.define('client',{
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    name : {
        type : Sequelize.STRING
    },
    password : {
        type : Sequelize.STRING
    },
})

module.exports = Client;