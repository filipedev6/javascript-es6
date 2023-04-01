// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const li = document.querySelectorAll('li');

for(const item of li){
  console.log(item.classList.add('ativo'))
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for(const objW in window){
  console.log(`${objW}: ${window[objW]}`)
}