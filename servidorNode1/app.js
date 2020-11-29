//Importamos express
const express = require('express');
//Instanciamos APP
const app = express();
//Importmos las variables de entorno
require('dotenv').config({ path : './variables.env'});
//Importamos CORS
const cors = require('cors');
//Importamos las ROUTAS
const routeAdmin = require('./routes/routeAdmin');
//-----------------------------
//Habilitamos las respuestas JSON DEL SERVIDOR
app.use(express.json({ extended : true}));

//Creamos las routas 
app.use('/api1' , routeAdmin())

module.exports = app;