function validarSenha(senha) {
  // Verifica o comprimento da senha
  if (senha.length < 8) {
    return false;
  }

  // Verifica se contém pelo menos uma letra maiúscula, uma letra minúscula e um número
  let temMaiuscula = false;
  let temMinuscula = false;
  let temNumero = false;

  for (let i = 0; i < senha.length; i++) {
    if (senha[i] >= 'A' && senha[i] <= 'Z') {
      temMaiuscula = true;
    } else if (senha[i] >= 'a' && senha[i] <= 'z') {
      temMinuscula = true;
    } else if (senha[i] >= '0' && senha[i] <= '9') {
      temNumero = true;
    }

    // Verifica se todos os critérios foram atendidos
    if (temMaiuscula && temMinuscula && temNumero) {
      return true;
    }
  }

  return false;
}

// Exemplo de uso:
let senha1 = 'SenhaSegura123';
let senha2 = 'senhafraca';
let senha3 = 'SENHAFORTE';
let senha4 = '12345678';

console.log(validarSenha(senha1)); // true
console.log(validarSenha(senha2)); // false
console.log(validarSenha(senha3)); // false
console.log(validarSenha(senha4)); // false
