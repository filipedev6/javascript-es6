// MACETINHO PARA PEGAR ULTIMO VALOR
// const frase = 'A melhor Comida';
// console.log(frase[frase.length - 1])

const frase = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

const fraseCompleta = frase.concat(linguagem, '!!');

const precos = ['R$ 99,00', '110,00', '550,00'];

precos.forEach((preco) => {
    console.log(preco.padStart(20, '.'))
})

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');
