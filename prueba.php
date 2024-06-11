<?php

$array = [
    'nombre' => 'sebasain',
    'segundo' => 'camilo',
    'last_name' =>'jimenez',
     'last_name2' => 'hernandez'
];
$valores = array_values($array);


$sql = array_map( function ($value) {
    return "'".$value."'";
},$array);
echo implode(',',$sql);


var_dump($sql);
echo "\n";
// echo "SELECT $sql FROM tabla1";