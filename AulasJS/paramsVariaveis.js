function soma(){ // não foi declarado nenhum parametro
    let soma = 0;
    // Nesse for, vai pegar tudo que foi passado por parametro 
    for(i in arguments){ // i == valor || in arguments é um array
        soma += arguments[i];
    }
    return soma;
}

// retorna zero
console.log(soma());

// retorna 4
console.log(soma(2,2));

// retorna tudo concatenado
console.log(soma( 2,'teste', 'a', 'b' , 4));