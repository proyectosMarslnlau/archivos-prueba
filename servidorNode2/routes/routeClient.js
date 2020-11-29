//Importamos EXRESS
const express = require('express');
//Importamos ROUTER
const route = express.Router();
//Importamos el CONTROLLER
const clienteController = require('../controller/clientController');

//--------------------------------------------
module.exports = () => {
    route.get( '/client' , clienteController.peticionClientInformation);
    return route;
}