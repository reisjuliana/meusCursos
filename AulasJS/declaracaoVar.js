{
    {
        {
            {
                var sera = 'será?'
            }
        }
    }
}

// A variavel dentro de um bloco de codigo que não seja uma função ficará visivel
console.log(sera);

// Variavel dentro da função não pode ser acessada de fora
function teste(){
    // O escopo da variavel fica dentro da função
    var local = 456
}
// uma variavel fora de função é global

teste()
//console.log(local)

// Exemplo 2 

var numero = 1
{
    var numero = 2
    console.log('dentro=', numero)
}
console.log('fora=', numero) 