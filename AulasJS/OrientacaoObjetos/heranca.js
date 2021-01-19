// Herança em JavaScript

// Exemplo 1
const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)

// Exemplo 2
// Cadeia de protótipos (prototype chain)

const avo = { attr1: 'A'}
//const pai = {__proto__: avo, attr2: 'B' }
const filho = {__proto__: avo, attr3: 'C'}

console.log(filho.attr1)

//Exemplo 2
const pai = {
    nome: 'Pedro',
    corCabelo: 'Preto'
}

const filha1 = Object.create(pai)

filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'BIA', writable: false, enumerable: true}
})

console.log(filha2.nome)

