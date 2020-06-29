console.log(typeof Object); // Object é uma função

class Produto {}
console.log(typeof Produto); // Classe Produto é uma função

// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 20, 10, 30)

//Função com retorno 
function soma(a, b = 0){
    return a + b
}
console.log(soma(2, 3))

// Armazenando uma função em uma variável 
const imprimirSoma = function (a, b){
    console.log(a+b)
}

imprimirSoma(2, 3)

// Armazenando uma funçãoo arrow em uma variável
const soma = (a+b) => {
    return a + b
}

// Retorno implícito
cons subtracao = (a + b) => a - b

