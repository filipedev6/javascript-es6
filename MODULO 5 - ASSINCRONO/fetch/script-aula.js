// const pageSobre = fetch('sobre.html');
// const div = document.createElement('div');
// console.log(div)

// pageSobre.then((response) => {
//     return response.text()
// }).then((resultResponse) => {
//     console.log(resultResponse)
//     div.innerHTML = resultResponse;
//     const h1 = div.querySelector('h1');
//     document.querySelector('h1').innerText = h1.innerText
// })

// const imagem = fetch('gol.webp');

// imagem.then((objResponse) => {
//     return objResponse.blob()
// }).then((responseBlob) => {
//     const blobUrl = URL.createObjectURL(responseBlob);
//     const img = document.querySelector('img');
// console.log(responseBlob)

//     img.src = blobUrl;
// })

const cep = fetch('https://brasilapi.com.br/api/cep/v1/32071167');

cep.then((result) => {
    console.log(result.type)
})