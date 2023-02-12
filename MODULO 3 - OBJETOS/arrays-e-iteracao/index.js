// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');
const cursosLista = Array.from(cursos);

const objCurso = cursosLista.map((curso) => {
  const titulo = curso.children[0].innerText;
  const descricao = curso.children[1].innerText
  const aulas = curso.children[2].innerText
  const horas = curso.children[3].innerText

  return {
    titulo,descricao,aulas,horas
  }
});

console.log(objCurso)


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const numerosMaior100 = numeros.filter((n) => {
  return n > 100;
})

console.log(numerosMaior100)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const baixoInstrumentos = instrumentos.some((instrumento) => {
  return instrumento === 'Baixo'
})

console.log(baixoInstrumentos)

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
];

const somaTotalCompras = compras.reduce((anterior, compra) => {
  
  const preco = Number(compra.preco.replace('R$', '').trim().replace(',', '.'));

  return anterior + preco;
}, 0)


console.log(somaTotalCompras);