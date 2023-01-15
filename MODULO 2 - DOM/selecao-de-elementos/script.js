// Retorne no console todas as imagens do site
const allImgs = document.querySelectorAll('img');

console.log(allImgs)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const justImages = document.querySelectorAll('img[src^="img/imagem"]');
console.log(justImages);

// Selecione todos os links internos (onde o href começa com #)
const allhref = document.querySelectorAll('a[href^="#"]');
console.log(allhref)

// Selecione o primeiro h2 dentro de .animais-descricao
const firsth2 = document.querySelector('h2');

// Selecione o último p do site
const allP = document.querySelectorAll('p');

console.log(allP[allP.length - 1]);