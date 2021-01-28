const fs = require('fs')

const caminho = __dirname + "/arquivo.json"

// sincrono.. se for pesado vai travar 

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrona ..
fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo) // transformando em objeto
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)
