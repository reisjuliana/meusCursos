// FOREACH

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach(function (nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

// MAP

const nums = [1, 2, 3, 4]

let resultado = nums.map(function(e){
    return e * 20
})

console.log(resultado)

// Exercicio 

const carrinho = [
    '{"nome" : "Borracha", "preco" : 3.45}',
    '{"nome" : "Caderno", "preco" : 13.90}',
    '{"nome" : "Kit de Lapis", "preco" : 41.22}',
    '{"nome" : "Caneta", "preco" : 7.50}',
]

let preco = carrinho.map(function(e){
    return e[2].nome
})

console.log(preco)