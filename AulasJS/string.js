const escola = "Cod3er"
console.log(escola.charAt(4)); // retonar o char na 4 posição
console.log(escola.charCodeAt(4)); // retorna o valor na tabela assk
console.log(escola.indexOf("3")); // retorna o indice onde está esse valor
console.log(escola.substring(1 , 3)) // vai até o indice 2 imprindo em tela
console.log("escola ".concat(escola).concat("!")) // concatena 
console.log(escola.replace(3, "e"));// substitui 
console.log(escola.replace(/\w/, "e"));// substitui tudo pela letra e
console.log("Ana, Maria, Pedro".slit(",")) // cria um array onde o separador é a virgula 