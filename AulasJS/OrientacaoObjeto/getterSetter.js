const sequencia = {
    _valor: 1, // convenção -> está mostrando para os outros desenvolvedores que este atributo é privado
    get valor() {return this._valor++},
    set valor(valor) {this._valor = valor}
}