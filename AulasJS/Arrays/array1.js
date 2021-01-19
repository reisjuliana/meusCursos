// Array em javascrit é um OBJETO 
console.log(typeof Array);

let aprovados = new Array('Carlos', 'Ana', 'Bia'); // não é costumeiro fazer desta forma 
console.log(aprovados);

aprovados = ['Carlos', 'Ana', 'Bia']; // dessa forma sim
console.log(aprovados[0]);

// Metodos importantes

const pilotos = ['Juliana', 'Eduardo', 'Kelvin'];

pilotos.pop(); // sai a última posição
console.log(pilotos)

pilotos.push('Ellvis'); // inclui mais um elemento 
console.log(pilotos)

pilotos.shift(); // sai a primeira posição
console.log(pilotos)

pilotos.unshift('Elania'); // inclui na primeira posição
console.log(pilotos)

// splice pode adicionar e remover elementos

// Adicionar 
pilotos.splice(2, 0, 'Julio', 'Christian') // antes do indice 2 será adicionado 
console.log(pilotos)

pilotos.splice(3, 1) // no indice 3 sera removido 
console.log(pilotos)

const algunsPilotos = pilotos.slice(2); // novo array a partir do indice 2
