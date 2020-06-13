<?php

function incluirClasses($nomeClasse){

    //Verifica se o arquivo já existe no diretório
    if (file_exists($nomeClasse.".php") === true){ // função retorna true ou false
        require_once($nomeClasse.".php");
    }

    require_once("$nomeClasse.php");
}

spl_autoload_register("incluirClasses");

spl_autoload_register(function($nomeClasse){
    if (file_exists("Abstratas" . DIRECTORY_SEPARATOR . $nomeClasse.".php") === true){ // função retorna true ou false
        require_once("Abstratas" . DIRECTORY_SEPARATOR . $nomeClasse.".php");
    }
}

// Essa função pegara o nome da classe e realizara o require
// Neste caso da certo para classes que estão no mesmo arquivo
/*function __autoload($nomeClasse){
    var_dump($nomeClasse); // Consegue verificar quais as classes que foram chamadas
    require_once($nomeClasse.".php");
}*/


//$carro = new DelRey(); // a palavra new chama o método __autoload
//$carro->acelerar(10);

?>