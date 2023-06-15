function encontrarMaiorElemento() {
  const numerosStr = prompt("Digite os números da matriz separados por vírgula:");
  const numeros = numerosStr.split(",").map(Number);

  if (numeros.length === 0 || numeros.includes(NaN)) {
    return null;
  }

  let maiorElemento = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorElemento) {
      maiorElemento = numeros[i];
    }
  }

  return maiorElemento;
}
