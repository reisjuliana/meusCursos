const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback

let notasBaixas = []

for (let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com callback
const notasBaixas2 = notas.filter(function (nota){ // Essa função callback retorna verdadeiro ou falso
    return nota < 7 // Se isso for falso, não retorna nada, se for verdadeiro retorna o VALUE do array para dentro da variável notasBaixas 
}); // função para filtrar os elementos de um array encima de um critério 

console.log(notasBaixas2)