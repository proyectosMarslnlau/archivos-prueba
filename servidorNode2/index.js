//Importamos EXPRESS
const express = require('express');
//Importamos las variables de entorno
require('dotenv').config({ path : './variables.env'});
//Importamos las configuracion de base de datos
const db = require('./config/db');
//Importamos APP
const app = require('./app');

//-------------------------------------
//Invocamos las variables de entorno
const PORT_SERVER = process.env.PORT_SERVER;

//
db.sync()
    .then( () => console.log('conectado a la base de datos'))
    .catch( error => console.log(error));

//Verificamos la conexion y sincronizamos las tablas de BASE DE DATOS

app.listen( PORT_SERVER, () => {
    console.log(`SERVICIO FUNCIONANDO EN EL PUERTO ${PORT_SERVER}`);
})