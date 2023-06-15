function checksenha() {
  s = prompt('Digie uma senha: ')

  if (s.length < 8) {
    return false;
  }

  
  let Mai = false;
  let Min = false;
  let Num = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= 'A' && s[i] <= 'Z') {
      Mai = true;
    } else if (s[i] >= 'a' && s[i] <= 'z') {
     Min = true;
    } else if (s[i] >= '0' && s[i] <= '9') {
      Num = true;
    }

    // Verifica se todos os critérios foram atendidos
    if (Mai && Min && Num) {
      return true;
    }
  }

  return false;
}

