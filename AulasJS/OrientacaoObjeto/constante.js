// pessoa aponta para um endereço de memoria
const Pessoa = {
    nome: 'Joao'
}

// Pessoa continua apontando para o mesmo objeto, porém mudou as informações
Pessoa.nome = 'Pedro'

console.log(Pessoa.nome)

// está tentando passar o mesmo objeto para outro endereço. vai dar erro pq o objeto é uma constante. 
Pessoa = {nome: 'ana'}

// com do freeze o objeto será congelado, ou seja, nenhuma mudança será feita
Object.freeze(pessoa)
