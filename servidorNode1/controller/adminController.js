//Importamos las varibles de entorno
require('dotenv').config({path : '../variables.env'});
//Importamos el MODELL
const Admin = require('../modell/adminModell');

//-----------------------------------------
exports.peticionAdminInformation = async(req, res) => {
    try {
        const peticionAdmin = await Admin.findAll(
            {raw : true}
        )
        res.json({ response : peticionAdmin})
    } catch (error) {
        res.status(400).json({ msg : 'ERROR '})
    }
}