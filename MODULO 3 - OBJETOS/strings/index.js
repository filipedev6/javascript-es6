// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((transacao) => {
    const valorTransacao = Number(transacao.valor.replace("R$ ", ''));
    
    if(transacao.descricao.includes('Taxa')){
        taxaTotal += valorTransacao;
    } else {
        recebimentoTotal += valorTransacao;
    }
})

console.log(taxaTotal);
console.log(recebimentoTotal);


// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(';');

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
            </ul>`;

html = html.split('span').join('a');

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase[frase.length - 1])

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalTaxas = 0;
transacoes2.forEach((item) => {
    const taxas = item.toLowerCase().trim().slice(0, 4);

    if(taxas === 'taxa'){
        totalTaxas++
        // SEMPRE ADICIONAR +1 no total de taxas.
    }
})

console.log(totalTaxas);