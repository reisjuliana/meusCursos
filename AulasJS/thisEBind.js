const pessoa = {
    saudacao: 'Bom Dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar();

// bind é responsável por 'amarrar' o objeto ao método
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa();

function Pessoa(){
    this.idade = 0
    const self = this // Pode ser assim também para amarrar o objeto Pessoa
    // A cada 1 segundo, a função será disparada
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) //.bind(this) amarra o objeto Pessoa

}

new Pessoa

