<?php
$url = 'localhost';
$user = 'root';
$password= '';
$nameDB = 'inventario_inmobiliaria';
$db = mysqli_connect($url, $user, $password, $nameDB);

if (!$db){
    echo "Hubo un erro";
    exit;
};


