<?php
function connection()
{
    $db = 'database.php';
    return $db;
};
function json($js)
{
    $json = json_encode($js);
    echo $json;
};
$_SERVER['REQUEST_METHOD'] == 'GET';
json(inventario());
function inventario (){
    require connection();
    $sql = "SELECT MAX(id_inventario) AS 'Inventario' FROM `inventario`;";
    $query = mysqli_query($db,$sql);
    $inv = mysqli_fetch_assoc($query);
    return $inv["Inventario"] + 1;
}