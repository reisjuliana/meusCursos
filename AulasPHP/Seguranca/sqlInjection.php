<?php

$id = (isset($_GET["id"])) ? $_GET["id"]: 1;

if(!is_numeric($id) || strlen($id) > 5){
    exit("Te peguei!");
}


$conn = new mysqli("localhost", "root", "", "meuBanco");

$sql = "SELECT * FROM tb_usuarios WHERE idusuario = $id";

$exec = mysqli_query($conn, $sql);

while ($resultado = mysqli_fetch_object($exec)) {
    echo $resultado->deslogin;
    echo "<br>";
}


?>

<form method="get">

    <input type="text" name="id">
    <button type="submit"> Enviar </button>

</form>