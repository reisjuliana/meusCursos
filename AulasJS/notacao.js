console.log(Math.ceil(6.1)) // arrendodamento para o teto
const obj1 = {}
console.log(typeof obj1) // obj1 é um objeto 
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2'

console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
}

const obj2 = new Obj('Cadeira')
console.log(obj2.nome)