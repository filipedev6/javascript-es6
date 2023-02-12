function Person(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const filipe = new Person();
filipe.nome = "Filipe";
filipe.idade = 16;

console.log(filipe);

function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;

  this.marca = marca;
  this.preco = precoFinal;
}

const mazda = new Carro2("Mazda", 5000);
