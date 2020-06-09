<?php

class Endereco {
    private $lougradouro;
    private $cidade;
    private $numero;

    //Metodo para construir um objeto
    public function __construct($a, $b, $c){
        $this->lougradouro = $a;
        $this->cidade = $b;
        $this->numero = $c;
    }

    //Metodo para destruir um objeto
    //Sempre será a última função a ser chamada
    public function __destruct(){
        var_dump("destruir");
    }
    
    //Converter para String - Função para exibir os dados do objeto
    public function __toString(){
        return $this->lougradouro.", ".$this->cidade.", ".$this->numero;
    }
}

$meuendereco = new Endereco('Beco 1', 'Porto Alegre', 10);
var_dump($meuendereco);
        
// Função para matar a variável 
//unset($meuendereco);

echo $meuendereco;