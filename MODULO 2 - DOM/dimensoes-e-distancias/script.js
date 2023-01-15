// Verifique a distância da primeira imagem
// em relação ao topo da página

const firstImg = document.querySelector("img");

console.log(firstImg.offsetTop);

// Retorne a soma da largura de todas as imagens
const allImg = document.querySelectorAll("img");

function somaImg() {
  let soma = 0;

  allImg.forEach((img) => {
    soma = soma + img.offsetWidth;
  });

  console.log(soma);
}

window.onload = function () {
  somaImg();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');

links.forEach((a) => {
    const widthLink = a.offsetWidth;
    const heightLink = a.offsetHeight;

    if(widthLink > 48 && heightLink > 48){
        console.log(a,'possui acessibilidade')
    } else {
        console.log(a,'não possui boa acessibilidade')
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserWidth = window.matchMedia("(max-width: 720px)").matches;
const menu = document.querySelector(".menu");

if (browserWidth) {
  menu.classList.add("menu-mobile");
} else {
  menu.classList.remove("menu-mobile");
}
