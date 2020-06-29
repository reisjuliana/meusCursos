// Null e undefined

const a = {name: "teste"}
const b = a // a e b estão apontando para o mesmo lugar na memória 
b.name = "opa" // a também muda o nome paa opa, pois estão indicando o mesmo endereço 
console.log(a, b);

// Neste caso foi feito uma cópia por valor - tipo primitivo. São valores independentes. 
let c = 3
let d = c
d++;
console.log(c, d);

// conceito do undefined
let valor // não inicializada - valor por padrão undefined
console.log(valor)

valor = null // não tem valor e não está apontando para nenhum endereço de memória
// null = ausência de valor
// console.log(valor.toString()) // erro - você não pode ler um arquivo null 

const produto = {}
console.log(produto.preco) // não vai dar erro, mas vai dizer que está undefined
produto.preco = 3.50
console.log(produto.preco) 
produto.preco = undefined // evite atribuir undefined
produto.preco = null // sem preço 