<?php

$conn = new PDO("mysql:dbname=meuBanco;host=localhost", "root", "");

$stmt = $conn->prepare("SELECT * FROM tb_usuarios");
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach($result as $row){
    foreach($row as $key => $value){
        echo "<strong>".$key.":</strong>".$value."</br>";
    }
    echo "======================================================= </br>";
}

var_dump($result);

?>