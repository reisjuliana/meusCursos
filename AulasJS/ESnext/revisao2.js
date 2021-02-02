// Arrow Function - Função anonima, precisa passar para uma const

const soma = (a, b) => a + b

console.log(soma(10, 5))

// Arrow Function (this) - está associado ao local que a função foi escrita 

const lexicol = () => console.log(this === exports)
lexicol() // true 

// parametro default 
function log(texto = 'node') {
    console.log(texto)
}

log()
log('Sou mais forte')



