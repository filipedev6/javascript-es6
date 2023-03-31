const button = {
    get tamanho() {
        return this._tamanho
    },
    set tamanho(tipo) {
        this._tamanho = tipo
    }
}

const list = {
    lista: [],
    set fruta(fruta) {
        this.lista.push(fruta)
    }
}