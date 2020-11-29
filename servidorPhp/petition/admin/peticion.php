<?php
//Invocamos los CORS para no tener problemas de envio de informacion
require_once('../../services/cors.php');
//Invocamos las funciones de Invocacion de CREATE

require_once('../class/requestRead.php');

//-------------------------------------------------------------------------
//Decodificacion de las entradas de USUARIO
header("Content-Type: application/json");
$varEntrada = json_decode(file_get_contents('php://input'), true);

//Variables
//
$consultaCodigo = petitionRead::consultarTodo();

echo json_encode(array('response' => $consultaCodigo));


?>