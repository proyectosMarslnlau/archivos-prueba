//Importamos SEQUELIZE
const Sequelize = require('sequelize');

//Importamos las configuraciones de la base de datos
const db = require('../config/db');

//Denominamos a la base de datos

const Admin = db.define('admin', {
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    nombre : {
        type : Sequelize.STRING
    },
    pass : {
        type : Sequelize.STRING
    },
});

module.exports = Admin;