// multiplas seleções
const imprimirResultado = function(nota) {
    switch (Math.floor(nota)){
        case 10: // caso o valor seja 10
        case 9:
            console.log("Quadro de Honra"); // entra nesse case 
            break /// só irá sair do switch se a palavra reservada break for utilizada, caso contrário ele sai executanto os demais também de baixo. 
        case 8: case 7:
            console.log("Aprovado");
            break    
    }
}

imprimirResultado(7)