//Importamos EXPRESS
const express = require('express');
//Instanciamos APP
const app = express();
//Importamos las variables de entorno
require('dotenv').config({ path : './variables.env'});
//Importamos las routas
const routeClient = require('./routes/routeClient');
//--------------------------------------------
//Habilitamos las respuesta JSON del servidor
app.use(express.json({extended : true}));

//Creamos las ROUTAS
app.use('/api2', routeClient())

module.exports = app;