const preco = 10.499;
console.log(preco.toFixed());

let valor = 48.49;
valor = valor.toLocaleString('pt-BR', {currency: 'BRL', style: 'currency'});

console.log(valor);