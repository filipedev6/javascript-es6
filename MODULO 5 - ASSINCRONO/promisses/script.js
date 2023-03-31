// const promessa = new Promise((resolve, reject) => {
//     let condicao = true;

//     if(condicao){
//         setTimeout(() => {
//             resolve({name: 'Filipe'})
//         }, 1000)
//     } else {
//         reject(Error('Error'))
//     }
// })

// const retorno = promessa.then((resolucao) => {
//     console.log(resolucao)
//     return 'Teste 1'
// }).catch((rejeitada) => {
//     console.log(rejeitada)
// }).finally(() => {
//     console.log('acabou');
// })

// const login = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Logou na página')
//     }, 5000)
// });

// const dados = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Dados Carregados')
//     }, 5000)
// })

// const tudoCarregado = Promise.all([login, dados]);

// tudoCarregado.then((value) => {
//     console.log(value)
// })

const promessa = new Promise((resolve) => {
    resolve('oi')
})