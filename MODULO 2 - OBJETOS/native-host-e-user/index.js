// // Liste 5 objetos nativos

// console.log(typeof {}) // Object
// console.log(typeof []) // Array
// console.log(typeof function() {}) // Function
// console.log(typeof "f") // String
// console.log(typeof 1) // Number

// // Liste 5 objetos do browser
// console.log(typeof NodeList) // NodeList (Lista)
// console.log(typeof Element) // Element (Elemento HTML)
// console.log(typeof Window) // Window (Browser)
// console.log(typeof Document) // Document (HTML)
// console.log(typeof addEventListener) // Evento

// // Liste 2 Métodos, Propriedades ou Objetos
// // presentes no Chrome que não existem no Firefox




function Pessoa(nome){
    this.nome = nome;
}

Pessoa.prototype.andar = function() {
    return 'andou'
}

const filipe = new Pessoa('Filipe');

