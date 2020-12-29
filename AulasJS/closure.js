// Closure é o escopo criado quando função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função 

// Contexto léxico em ação

const x = "global"

function fora(){ // inicio do escopo da funcao dentro
    const x = "local"
    function dentro(){
        return x
    }
    return dentro 
} // fim do escopo da funcao dentro 

const minhaFuncao = fora()
console.log(minhaFuncao())