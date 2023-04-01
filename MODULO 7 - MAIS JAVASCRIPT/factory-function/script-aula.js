// function createButton(text) {
//     function element() {
//         const btn = document.createElement('button');
//         btn.innerText = text;

//         return btn
//     }

//     return Object.freeze({
//         text,
//         element
//     })
// }

// const btnComprar = createButton('Comprar')
// const btnVender = createButton('Vender')

function Pessoa(nome) {
    if(!(this instanceof Pessoa)){
        return new Pessoa(nome)
    }

    this.nome = nome;
}

Pessoa.prototype.andar = function() {
    return `${this.nome} andou`;
}
  
const designer = Pessoa('André');