// const cep = 'https://viacep.com.br/ws/01001000/json/';

// fetch(cep, {
//     method: 'HEAD'
// })
// .then((response) => console.log(response))

function init() {
    const url = 'http://localhost:3000/anotation/create';

    fetch(url, {
        method: 'POST',
        body: '{"title": "Arrumar Casa 1", "description": "Terminar tudo hoje", "note": "AS 18H"}',
        headers: {"Content-Type": "application/json; charset=utf-8"}
    })
}

init()