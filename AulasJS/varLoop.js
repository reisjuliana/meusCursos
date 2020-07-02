for (var i = 0; i <10 ; i++){
    console.log(i)
}
// vai rotornar 10, pois a variavel i continua existindo 
console.log("i = ", i)

for (let a = 0; a <10 ; a++){
    console.log(a)
}
// vai dar erro por a variavel é apenas dentro do escopo
console.log("i = ", a)
