export default function initFetchBitcoin() {
  function fetchAPI(url) {
    fetch(url)
    .then(response => response.json())
    .then((bitcoin) => {
      const bitcoinDisplay = document.querySelector('.btc-preco');
      bitcoinDisplay.textContent = (100 / bitcoin.BRL.sell).toFixed(4);
    }).catch((error) => {
      throw new Error(error);
    })
  }
  
  fetchAPI('https://blockchain.info/ticker')  
}

