//Importamos EXPRESS
const express = require('express');
//Importamos las variables de entorno
require('dotenv').config({path : './variables.env'});
//Importamos app
const app = require('./app');
//Importamos la base de datos
const db = require('./config/db');

//---------------------------------------
//Invocamos las variables de entorno
const PORT_SERVER = process.env.PORT_SERVER;

//Verificamos la conexion a la base de datos
db.sync()
    .then( () => console.log('conectado a la base de datos'))
    .catch( error => console.log(error));

//Levantamos el servicio de LISTEN
app.listen(PORT_SERVER, () => {
    console.log(`SERVICIO FUNCIONANDO POR EL PUERTO ${PORT_SERVER}`);
})