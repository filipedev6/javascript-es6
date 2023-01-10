function imc(peso, altura) {
  return peso / (altura * altura);
}

console.log(imc(80, 1.8));

function corFavorita(cor) {
  if (cor === "Azul") {
    return "Eu gosto do ceu";
  } else if (cor === "Verde") {
    return "Eu gosto de mato";
  } else if (cor !== "Azul") {
    return "Eu gosto dessa cor ai também";
  }
}

console.log(corFavorita());

