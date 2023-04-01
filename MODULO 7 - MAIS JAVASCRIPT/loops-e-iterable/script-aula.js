const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

for(const fruta of frutas){
  console.log(fruta)
}

const carro = {
  marca: 'Honda',
  ano: 2018,
}

for(const propriedade in carro) {
  console.log(carro[propriedade]);
}

const btnUnico = document.querySelector('button');
const btnStyles = getComputedStyle(btnUnico);

for(const style in btnStyles){
  console.log(`${style}: ${btnStyles[style]}`)
}