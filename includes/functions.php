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
        $sql_cod = "SELECT * FROM propiedades WHERE codigo_propiedad = '$codigo';";
        $query_cod = mysqli_query($db, $sql_cod);
        if($query_cod -> num_rows > 0){ // si existe la propiedad
            $sql_num = "SELECT MAX(id_inventario) AS 'inventario' FROM inventario;";
            $query_num = mysqli_query($db,$sql_num);
            $id_inventario = mysqli_fetch_assoc($query_num)["inventario"]+1;
            $sql = "INSERT INTO inventario (id_inventario,codigo_propiedad, fecha_inventario) VALUES ($id_inventario,'$codigo','$fecha') ;";
            mysqli_query($db,$sql);
            $respuesta = [
                "proceso" => true,
                "id_inventario" => $id_inventario 
            ];
            return $respuesta;
        }else{
            return false;
        }
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
            
            return false;
        }
    } catch (\Throwable $th) {
        var_dump($th);
    }
}
function eliminar($tablas, $id_inventario){
    try {
        require connection();
        $sql_inv = "SELECT * FROM inventario WHERE id_inventario = $id_inventario;";
        $query_inv = mysqli_query($db,$sql_inv);
        if($query_inv -> num_rows > 0 ){
            foreach ($tablas as $key => $value) {
                $sql = "DELETE FROM $value WHERE id_inventario = $id_inventario;";
                mysqli_query($db, $sql);
            }
            $sql_inventario = "DELETE FROM inventario WHERE id_inventario = $id_inventario;";
            mysqli_query($db, $sql_inventario);
            return true;
        }else{
            return false;
        }
    } catch (\Throwable $th) {
        var_dump($th);
    }
}
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    if(isset($_POST["funcion"])){
        switch ($_POST["funcion"]){
            case 1: //Crear nuevo inventario
                $codigo = $_POST["codigo"];
                $fecha = $_POST["fecha"];
                $num_invent = inventario($codigo,$fecha);
                json($num_invent);
                break;
            case 2: //Guardar formulario por cada zona
                $tabla = $_POST["tabla"];
                $id_inventario = $_POST["id_inventario"];
                $id_zona = $_POST["id_zona"];
                $propiedades = $_POST["propiedades"];

                $objeto = json_decode(json_encode($_POST["objeto"]));
                $array_obj = get_object_vars($objeto);

                $propiedades = array_keys($array_obj);
                $propiedades = implode(', ',$propiedades);

                $valores = array_map( function ($value) {
                    return "'".$value."'";
                },$array_obj);
                $valores = implode(', ',$valores);

                // $guardar = guardar($tabla,$id_inventario,$id_zona,$propiedades,$valores);
                // $respuesta = [
                //     "proceso" => $guardar,
                //     "nombre" => $tabla
                // ];
                $respuesta = [
                    "proceso" => true,
                    "nombre" => $tabla
                ];
                json($respuesta);
                break;

            case 3: // eliminar inventario en todas las zonas y tambien de la 
                $tablas = $_POST["tablas"];
                $id_inventario = $_POST["id_inventario"];
                $eliminar = eliminar($tablas, $id_inventario);
                $respuesta = [
                    "proceso" => $eliminar
                ];
                json($respuesta);
                break;
        }   
    }
}