<?php

interface Veiculo{
    public function acelerar($velocidade);
    public function frenar($velocidade);
    public function trocaMarcha($marcha);

}

abstract class Automovel implements Veiculo{

    public function acelerar($velocidade){
        echo "O veículo acelerou até: ".$velocidade;
    }
    public function frenar($velocidade){
        echo "O veículo frenou até: ".$velocidade;
    }
    public function trocaMarcha($marcha){
        echo "O veículo trocou a macha para: ".$marcha;
    }
}

class DelRey extends Automovel {
    public function empurrar(){

    }

}

$carro = new DelRey();
$carro->acelerar(120);







?>