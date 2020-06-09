<?php

class Endereco {
    private $lougradouro;
    private $cidade;
    private $numero;

    public function __construct($a, $b, $c){
        $this->lougradouro = $a;
        $this->cidade = $b;
        $this->numero = $c;
    }
}

$meuendereco = new Endereco('Beco 1', 'Porto Alegre', 10);
var_dump($meuendereco);


?>