// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const cloneMenu = menu.cloneNode(true);
// TRUE PARA PEGAR FILHOS DO ELEMENTO

copy.appendChild(cloneMenu)

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('dl');
console.log(faq.children[0]);

// Selecione o DD referente ao primeiro DT
const firstDT = faq.children[0];
console.log(firstDT.nextElementSibling)

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');
faq.appendChild(animais);