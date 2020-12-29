/*03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.*/

/* COMO EU FIZ */

function potencia(base = 1, expoente = 1){
    result = base;
    for(let i = 1 ; i < expoente; i++){
        result = result * base;
    }
    return result;
}

console.log(potencia(5, 2));

/* COMO O PROFESSOR FEZ */