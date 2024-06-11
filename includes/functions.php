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


function inventario ($codigo,$fecha){
    try {
        require connection();
        $sql_num = "SELECT MAX(id_inventario) AS 'inventario' FROM `inventario`;";
        $query_num = mysqli_query($db,$sql_num);
        $sql = "INSERT INTO inventario (codigo_propiedad, fecha_inventario) VALUES ('$codigo','$fecha') ;";
        $num_inv = mysqli_fetch_assoc($query_num);
        mysqli_query($db,$sql);
        return $num_inv["inventario"]+1;
    } catch (\Throwable $th) {
        var_dump($th);
    }
}
function guardar($tabla,$id_inventario,$id_zona,$propiedades,$valores){
    try {
        require connection();
        $sql = "INSERT INTO $tabla (id_inventario,id_zona,$propiedades) VALUES ('$id_inventario','$id_zona',$valores);";
        $query = mysqli_query($db,$sql);
        if($query){
            return true;
        }else{
            echo "error". $db->error;
            return false;
        }
        // $sql_preba = "SELECT * FROM suelo WHERE id_inventario = 1;";
        // $query_prueba = mysqli_query($db,$sql_preba);
        // return mysqli_fetch_assoc($query_prueba);
    } catch (\Throwable $th) {
        var_dump($th);
    }
}
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    if(isset($_POST["funcion"])){
        switch ($_POST["funcion"]){
            case 1:
                $codigo = $_POST["codigo"];
                $fecha = $_POST["fecha"];
                $num_invent = inventario($codigo,$fecha);
                json($num_invent);
                break;
            case 2:
                $tabla = $_POST["nombre"];
                $id_inventario = $_POST["id_inventario"];
                $id_zona = $_POST["id_zona"];
                $propiedades = $_POST["propiedades"];

                $objeto = json_decode(json_encode($_POST["objeto"]));
                $array_obj = get_object_vars($objeto);
                // var_dump($array_obj);

                $propiedades = array_keys($array_obj);
                $propiedades = implode(', ',$propiedades);
                // var_dump($propiedades);
                $valores = array_map( function ($value) {
                    return "'".$value."'";
                },$array_obj);
                $valores = implode(', ',$valores);
                    // var_dump($valores);
                $guardar = guardar($tabla,$id_inventario,$id_zona,$propiedades,$valores);
                $respuesta = [
                    "proceso" => $guardar,
                    "nombre" => $tabla
                ];

                // json($respuesta);
                // json($_POST["objeto"]);
                // json($valores);
                break;
        }
    }
}