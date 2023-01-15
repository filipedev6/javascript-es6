// Adicione a classe ativo a todos os itens do menu
const allItensMenu = document.querySelectorAll(".menu ul li a");

allItensMenu.forEach((element) => {
  const elementAtivo = element.classList.add("ativo");
  console.log(element);
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

function removeClass() {
    const transformArray = Array.from(allItensMenu);

    return transformArray.map((item) => {
        return item.classList.remove('ativo');
    })
}


removeClass();

const firstElement = allItensMenu[0].classList.add('.ativo');

console.log();

// Verifique se as imagens possuem o atributo alt
const allImgs = document.querySelectorAll('img');
allImgs.forEach((img) => {
    const verifyAtt = img.hasAttribute('alt');

    if(verifyAtt){
        console.log('Existe atributo alt');
    } else {
        console.log('Não existe atributo alt');
    }
})

console.log(allImgs)

// Modifique o href do link externo no menu
