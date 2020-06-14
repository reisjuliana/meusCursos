<?php

//Conexão com o banco
$conn = new PDO("mysql:dbname=meuBanco;host=localhost", "root", "");

//Inserindo dados na tabela 
$stmt = $conn->prepare("INSERT INTO tb_usuarios (deslogin, dessenha) VALUES('Christinho', 'amoaju')");
$stmt->execute();

// Alterando dados na tabela 
$stmt = $conn->prepare("UPDATE tb_usuarios SET deslogin = 'Puzi', dessenha = 'amoopaudochris' where idusuario = 1");
$stmt->execute();

// Buscando os dados na tabela 
$stmt = $conn->prepare("SELECT * FROM tb_usuarios");
$stmt->execute();


// Exibindo os dados em tela 
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
foreach($result as $row){
    foreach($row as $key => $value){
        echo "<strong>".$key.":</strong>".$value."</br>";
    }
    echo "======================================================= </br>";
}


?>