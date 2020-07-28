//USANDO COMO FUNÇÃO

// Nessa função aqui recebera um objeto, porém com as {} ele já vai pegar os atributos dentro do objeto mesmo
function rand({min = 0, max = 100}){ // {} operador destructuring 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// Criando o objeto
const obj = {max: 50, min: 40}

// Passa o objeto
console.log(rand(obj));

// aqui tu pode passar um parametro para penas um, pois na função já ta declarado
console.log(rand({min: 955}));

// USANDO ARRAY

function rand2([min = 0, max = 100]){
    if(min > max) [min, max] = [max, min] // criando array com a inversão dos atributos
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand2([50, 40]));
console.log(rand2([50])); // passando apenas o primeiro
console.log(rand2([, 40])); // passando o segundo 