<?php

//Conexão com o banco
$conn = new mysqli("localhost", "root", "", "meuBanco");

//Verifica se deu certo
if($conn->connect_error){
    echo "Error: " . $conn->connect_error;
} else {
    echo "Conexão realizada com sucesso";
}

$stmt = $conn->prepare("INSERT INTO tb_usuarios (deslogin, dessenha) VALUES(?, ?)");
$stmt->bind_param("ss", $login, $pass); //esse método só é executado quando o execute for chamado
$stmt->execute();

$login = 'user';
$pass = '123456';

$conn->query("INSERT INTO tb_usuarios (deslogin, dessenha) VALUES('teste1','123' )");


?>