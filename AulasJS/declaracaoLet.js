let numero = 1

// let tem escopo apenas dentro do bloco
// no caso abaixo ele só aparecerá dentro do escopo

// ele verifica se dentro do escopo existe uma variavel chamada numero, caso nao tenha procura no escopo mais abrangente
{
    let numero = 2
    console.log('dentro=', numero)
}

console.log('fora=', numero)