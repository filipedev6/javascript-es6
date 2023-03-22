// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const responseDisplayCEP = document.querySelector('.result');
const formDisplay = document.querySelector('#form');

const fetchHTTPinAPI = (targetSearchValue) => {
    fetch(`https://brasilapi.com.br/api/cep/v1/${targetSearchValue}`)
    .then((response) => {
        if(response.status === 400){
            alert('Status Code ' + response.status)
            responseDisplayCEP.innerHTML = '';
        }

        return response.json()
    })
    .then((body) => {
        for(campo in body){
            document.querySelector('#'+campo).textContent = body[campo]
        }
    }).catch((err) => {
        throw new Error('Ocorreu um error durante a busca.')
    })
}

const handleSubmitForm = (event) => {
    event.preventDefault();

    const targetSearchValue = formDisplay.elements.valueCep.value.replace('-', '');
    fetchHTTPinAPI(targetSearchValue);
}

formDisplay.addEventListener('submit', handleSubmitForm);

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const btcDisplay = document.querySelector('#btcP');

function fetchBTC() {
    fetch('https://blockchain.info/ticker')
        .then((response) => response.json())
        .then((body) => {
            console.log(body.BRL.buy)
            btcDisplay.innerText = ("R$ " + body.BRL.buy).replace('.', ',')
        })
}

// setInterval(fetchBTC, 1000);
fetchBTC();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const btnProximoDisplay = document.querySelector('#proxima');
const piadaDisplay = document.querySelector('#piada');

function puxarPiada() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => response.json())
        .then((body) => {
            piadaDisplay.innerHTML = body.value
            console.log(body)
        })
}

puxarPiada()
btnProximoDisplay.addEventListener('click', puxarPiada)
