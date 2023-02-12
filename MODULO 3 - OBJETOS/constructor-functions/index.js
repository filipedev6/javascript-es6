// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: "Nome pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " andou");
  },
};

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade + " anos";
  this.andar = () => {
    alert(`${this.nome} andou`);
  };
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const Joao = new Pessoa("João", 20);
const Maria = new Pessoa("Maria", 25);
const Bruno = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function Dom(elemento) {
  
  this.elements = document.querySelectorAll(elemento);

  this.addClass = function (nomeClasse) {
    this.elements.forEach((element) => {
      element.classList.add(nomeClasse);
    });
  };
  
  this.removeClass = function (nomeClasse) {
    const transform = [...this.elements];
    const seletor = transform.map((element) => element.getAttribute("class"));

    if(nomeClasse !== seletor[0]) {
      return "Essa classe não existe";
    } else {
      this.elements.forEach((element) => {
        element.classList.remove(nomeClasse);
        element.removeAttribute('class');
      })
    }
  };
}

const li = new Dom("li");
