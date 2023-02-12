function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.andar = function() {
    return this.nome + ' Andou';
}

const filipe = new Pessoa('Filipe', 16);

console.log(filipe);

const node = document.querySelectorAll('ul');
console.log(node);

const carro = {
    marca: 'Ford',
    preco: 2000,
    andar() {
        return true;
    }
}