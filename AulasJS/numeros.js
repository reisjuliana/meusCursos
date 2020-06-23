const peso1 = 1.0
const peso2 = Number("2.0") // Number é uma função, com n minusculo é o tipo do dado
console.log(peso1, peso2);
console.log(Number.isInteger(peso1)) // retorna true se for um Number e false se não for

const avalicao1 = 9.87
const avalicao2 = 2.87

const total = avalicao1 * peso1 + avalicao2 * peso2
const media = total / (peso1 + peso2) 
console.log(media.toFixed(2)) // metodo para mostrar apenas duas casas decimais 
console.log(media.toString(2)) // em binário