const cep = 'https://viacep.com.br/ws/01001000/json/';

fetch(cep, {
    method: 'HEAD'
})
.then((response) => console.log(response))