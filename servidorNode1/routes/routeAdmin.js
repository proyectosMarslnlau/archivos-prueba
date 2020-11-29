//Importamos EXPRESS
const express = require('express');
//Importmaos ROUTER
const route = express.Router();
//Importamos el controller
const peticionAdmin = require('../controller/adminController');
//------------------------------------------------
module.exports = () => {
    route.get('/admin', peticionAdmin.peticionAdminInformation);
    return route;
}
