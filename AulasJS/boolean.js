// Aula sobre boolean

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
console.log(!isAtivo)

console.log("Os verdadeiros...")
console.log(!!3)
console.log(!!-3)
console.log(!!" ")
console.log(!!"teste")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("Os falsos...")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("para finalizar...")
console.log('' || null || 0 || "epa" || 123) // aqui o sistema vai retornar o primeiro falor TRUE que ele encontrou
console.log(!!('' || null || 0 || "epa" || 123)) // se o sistema encontrar uma valor TRUE retorna true!

let nome = "Christinho" 
console.log(nome || "Desconhecido") // é tipo um if
