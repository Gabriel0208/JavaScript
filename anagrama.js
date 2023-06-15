function saoAnagramas(palavra1, palavra2) {
  // Converte as palavras para letras minúsculas e remove os espaços
  palavra1 = palavra1.toLowerCase().replace(/\s/g, '');
  palavra2 = palavra2.toLowerCase().replace(/\s/g, '');

  // Verifica se as palavras têm o mesmo comprimento
  if (palavra1.length !== palavra2.length) {
    return false;
  }

  // Converte as palavras em arrays de caracteres
  const arrPalavra1 = palavra1.split('');
  const arrPalavra2 = palavra2.split('');

  // Ordena os arrays de caracteres em ordem alfabética
  arrPalavra1.sort();
  arrPalavra2.sort();

  // Verifica se os arrays ordenados são iguais
  return arrPalavra1.join('') === arrPalavra2.join('');
}

// Exemplo de uso:
let palavra1 = 'amor';
let palavra2 = 'roma';
let palavra3 = 'casa';
let palavra4 = 'sala';

console.log(saoAnagramas(palavra1, palavra2)); // true
console.log(saoAnagramas(palavra1, palavra3)); // false
console.log(saoAnagramas(palavra3, palavra4)); // false
