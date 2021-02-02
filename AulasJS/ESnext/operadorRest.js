// Spread 
// usar rest com parâmetro de função


// usar spread com objeto
const funcionario = {nome: 'Maria', salario:12348.99}

const clone = {ativo: true, ...funcionario}
// os "..." está pegando todos os atributos 
// do funcionario e passando para o clone

console.log(clone)

// também é possível aplicar para arrays