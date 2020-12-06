// usando a anotação literal 
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)

// Funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome // this, torna a variavel pública
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto ('Caneta', 7.99, 0.15)
const p2 = new Produto ('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());


// Função Factory
// factory é um padrão de projeto que normalmente cria algo, no caso aqui um objeto

function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
console.log(f1.getSalario())

// Criação de objeto.create

const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)

// uma função famosa que retorna um objeto...

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)