// par nome/valor
const saudacao = 'opa' // contexto léxico 1 "em qual local foi definido"

function exec(){
    const saudacao = 'falaa' // contexto léxico 2
    return saudacao
}

// Objeto são grupos aninhados de pares nome/valor
const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero:123
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)
