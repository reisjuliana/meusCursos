const funcs = []
const funcs2 = []

for(var i = 0; i<10 ; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]() // imprime 10
funcs[8]() // imprime 10

for(let a = 0; a<10 ; a++){
    funcs2.push(function(){
        console.log(a)
    })
}

funcs2[2]() // imprime 2
funcs2[8]() // imprime 8