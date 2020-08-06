function tratarErrorELancar(erro){
    //throw new Error('..')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritanto(){
    try{
        console.log(obj.name.toUpperCase()+'!!!');
    } catch (e) {
        tratarErrorELancar(e)
    } finally{
        console.log('Final')
    }
    
}

const obj = {nome: 'Roberto'}
imprimirNomeGritanto(obj)