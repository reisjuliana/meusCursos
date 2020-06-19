<?php

interface Veiculo{
    public function acelerar($velocidade);
    public function frenar($velocidade);
    public function trocaMarcha($marcha);

}

class Civic implements Veiculo{
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

$carro = new Civic;
$carro->acelerar(10);
$carro->frenar(5);
$carro->trocaMarcha(1);

?>