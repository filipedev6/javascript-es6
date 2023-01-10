// Crie uma função para verificar se um valor é Truthy
function isValue(value) {
  if (value) {
    return "Is value and truthy";
  } else {
    return "Is value and falsy";
  }
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(value) {
  return value * 4;
}

console.log(perimetroQuadrado(2));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return nome + " " + sobrenome;
}

console.log(nomeCompleto("Filipe", "Rodrigues"));

// Crie uma função que verifica se um número é par
function number(num) {
  let calcNum = num % 2;

  if (calcNum === 0) {
    return "Is number par";
  } else {
    return "Is number impar";
  }
}

console.log(number(2));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function typeDado(dado) {
  return typeof dado;
}

console.log(typeDado("olá"));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// Corrija o erro abaixo
let totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));