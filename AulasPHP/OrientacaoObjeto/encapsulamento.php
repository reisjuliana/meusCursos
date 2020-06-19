<?php 

//Exemplo 1
class Pessoa {
    public $nome = "Juliana";
    protected $idade = 48;
    private $senha = "1234";

    public function verDados(){
        echo $this->nome."<br/>";
        echo $this->idade."<br/>";
        echo $this->senha."<br/>";
    }

}

//Exemplo 2

class Programador extends Pessoa{
    // A classe programador extende tudo da classe Pessoa, exceto o que for privado

    public function verDados(){

        echo get_class($this)."<br/>";

        echo $this->nome."<br/>";
        echo $this->idade."<br/>";
        echo $this->senha."<br/>"; // a classe Programador não consegue acessar - não consegue visualizar
    }

}

$objeto = new Programador();
echo $objeto->verDados();