//Importamos las variables de ENTORNO
require('dotenv').config({ path : '../variables.env'});
//Importamos el MODELL
const Client = require('../modell/clienteModell');

//-------------------------------------------------
exports.peticionClientInformation = async(req, res) => {
    try {
        const peticionClient = await Client.findAll({
            raw : true
        });
        res.json({ respuesta : peticionClient});
    } catch (error) {
        res.status(400).json({ msg : 'error'})
    }
}