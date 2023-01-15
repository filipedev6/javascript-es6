// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach((link) => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    linksInternos.forEach((link) => {
      link.classList.remove('ativo')
    })

    event.target.classList.add('ativo');
  })
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const allElements = document.querySelectorAll('body *');

allElements.forEach((element) => {
  element.addEventListener('click', (event) => {
    event.currentTarget.remove();
  })
})


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
window.addEventListener('keydown', (event) => {
  if(event.key === 't'){
    const html = document.documentElement;

    html.classList.toggle('textBig')
  }
})
