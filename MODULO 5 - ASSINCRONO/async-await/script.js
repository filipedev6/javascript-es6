async function puxarDados() {
    const promisseDados = fetch('./dados.json')
    const responseClientes = fetch('./clientes.json');

    const responseDados = await promisseDados;
    
}

puxarDados()