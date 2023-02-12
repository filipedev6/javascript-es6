// Retorne um número aleatório
// entre 1050 e 2000

const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);

console.log(aleatorio)


// Retorne o maior número da lista abaixo
let numeros = '4, 5, 20, 8, 9';
numeros = numeros.split(', ');
const numberMax = Math.max(...numeros);


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function limparPreco(preco){
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
    preco = +preco.toFixed(2)

    return preco
}

let somaTotal = 0;
listaPrecos.forEach((item) => {
    somaTotal += limparPreco(item);
})

console.log(somaTotal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}))