<?php

// Mostrar todos os erros, mas não mostrar as noticias
error_reporting(E_ALL & ~E_NOTICE);

function trataName($name){
    if(!$name){
        throw new Exception("Nenhum nome foi informado", 400);
    }
    echo ucfirst($name).'<br>';
}

try {
    trataName("João");
    trataName("");
} catch (Exception $e) {
    echo json_encode(array(
        "massege"=>$e->getMessage()
    ));
} finally {
    echo "Executou o bloco try...";
}

function error_handler($code, $message, $file, $line){
    echo json_encode(array(
        "code"=>$code,
        "massege"=>$message
    ));
}

set_error_handler("error_handler");
echo 100 / 0; 


?>