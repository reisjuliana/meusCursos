<?php

abstract class Animal{
    public function falar(){
        return "fala";
    }

    public function mover(){
        return "anda";
    }
}

class Cachorro extends Animal{

    public function falar(){
        return "Late e " . parent::falar(); //parente é uma palavra reservada que chama o método da classe pai
    }
}

$pluto = new Cachorro();
echo $pluto->falar();
echo $pluto->mover();

?>