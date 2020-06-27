const valores = ["a", "b"]
console.log(valores)
console.log(valores[0])

valores[1] = 10
console.log(valores)

console.log(valores.length); // retorna quando elementos tem no array

valores.push({id: 3}, false, true, null, "teste")
console.log(valores)

console.log(valores.pop()) //  exclui o ultimo valor do array  e retorna ele

console.log(typeof valores); // retorna o tipo que é valores. Um array em JS é sempre um objeto 