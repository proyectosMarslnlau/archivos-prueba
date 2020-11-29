<?php
require_once('../../config/database.php');

class petitionRead
{
    function __construct()
    {
    }
    //Consulta de USUARIO Y PASSWORD **************************
    //Consulta todos los datos **********************************
    public static function consultarTodo()
    {
        $consulta = "SELECT * FROM admins";
        try {
            $sql = Database::getInstance()->getDb()->prepare($consulta);
            $sql->execute();
            $respuesta = $sql->fetchAll(PDO::FETCH_ASSOC);
            return $respuesta;
        } catch (PDOException $e) {
            return false;
        }
    }
    
}
