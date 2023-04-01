// const carro = {
//     marca: 'Honda',
//     ano: 2019
// }

// const { marca, ano } = carro;

// console.log(marca)

// const cliente = {
//     nome: 'Andre',
//     compras: {
//       digitais: {
//         livros: ['Livro 1', 'Livro 2'],
//         videos: ['Video JS', 'Video HTML']
//       },
//       fisicas: {
//         cadernos: ['Caderno 1']
//       }
//     }
// }

// const { digitais, fisicas, digitais: {livros, videos} } = cliente.compras;

// console.log(livros)

// const cliente = {
//     nome: 'Andre',
//     compras: 10,
// }

// const {nome: Filipe} = cliente;

// console.log(Filipe)

// const frutas = ['Banana', 'Uva', 'Morango'];

// const [primeira] = frutas;

// console.log(primeira)

function handleKeyBoard({key}){ 
    console.log(key)
}

document.addEventListener('keyup', handleKeyBoard)