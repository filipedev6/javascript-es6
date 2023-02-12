// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array) => {
//   array[0] = item.toUpperCase();

//   console.log(item, index, array);
// })

// console.log(carros);

const numeros2 = [1, 2, 3];

// PRIMEIRO ELE PASSA PELO 1 E FALA 1 + 0 = 1;
// SEGUNDO NUMERO 2 + 1 = 3;
// TERCEIRO NUMERO 3 + 3 = 6; 
// E FIM;

let soma = 0
numeros2.forEach((item) => {
   soma += item;
})

console.log(soma);

// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((acc, item) => {
//   console.log(acc, item);

//   return acc + item
// }, 0)

const numeros = [10, 25, 30, 3, 54, 33, 22];

const maior = numeros.reduce((anterior, atual) => {
  console.log(anterior, atual)

  if(anterior > atual){
    return anterior;
  } else {
    return atual;
  }

}, 0)

console.log(maior)


const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const listaAulas = aulas.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {})

console.log(listaAulas);

const aulas333 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]