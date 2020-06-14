<?php

//Conexão com o banco
$conn = new mysqli("localhost", "root", "", "meuBanco");

//Verifica se deu certo
if($conn->connect_error){
    echo "Error: " . $conn->connect_error;
} else {
    echo "Conexão realizada com sucesso";
}

//Inserindo registro
//$conn->query("INSERT INTO tb_usuarios (deslogin, dessenha) VALUES('teste1','123' )");

//Buscando dados
$result = $conn->query("SELECT * FROM tb_usuarios");

$data = array();

while($row = $result->fetch_array()){
    array_push($data, $row);
}

echo json_encode($data);

?>