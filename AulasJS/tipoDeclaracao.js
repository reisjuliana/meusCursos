// Como declarar funções

console.log(soma(3, 4))

// function declaration -- declaração padrão

// Importante: o interpretador do JS primeiro lê todas as funções do arquivo declaradas desta forma, carrega as funções e deixa elas preparadas para quando você for executar o código
// por esse motivo quando a linha 3 for executada, não terá nenhum problema. 
function soma(x, y){
    return x + y
}

// function expression - atribuir uma função anônima a uma constante ou variável 
// aqui não consegue executar a linha 3
const sub = function (x, y){
    return x + y
}

// named function expression - junção das duas acima *muito pouco usada*
// aqui não consegue executar a linha 3

const sub = function soma(x, y){
    return x + y
}

// 