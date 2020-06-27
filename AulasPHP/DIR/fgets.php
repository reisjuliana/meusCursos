<?php

$filename = "usuarios.csv"; // cria a variavel para incluir o nome do arquivo

if(file_exists($filename)){ // verifica se o arquivo existe
    $file = fopen($filename, "r"); // abre o arquivo e coloca R para leitura
    $headers = explode(",",fgets($file)); // pega apenas a primeira linha do arquivo e joga para variavel
    $data = array();
    while($row = fgets($file)){
        $rowData = explode(",",$row);
        $linha = array();
        for($i = 0 ; $i < count($headers) ; $i++){
            $linha[$headers[$i]] = $rowData[$i];
        }
        array_push($data, $linha);
    }
    fclose($file);
}

echo json_encode($data);