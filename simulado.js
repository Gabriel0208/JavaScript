// Questão 1:

function VerificarPrimo() {

     n = parseInt(prompt('Digite um número: '));

    if (n < 2) {
        alert(n + " não é primo!");
    } else {
         p = true;
        for (var i = 2; i < n; i++) {
            if (n % i === 0) {
                p = false;
                break;
            }
        }
        
        if (p) {
            alert(n + ' é primo!');
        } else {
            alert(n + ' não é primo!');
        }
    }
}

// Questão 9:

function CalculoFat(){

n = parseInt(prompt('Digite um número: '));
f = 1

for(i = 1; i <= n ; i++){

    f *= i
}
  alert('O fatorial de '+ n  + 'é ' + f)
}

// Questão 10
function fb(){
    n = parseInt(prompt('Digite um número: '));

    if (n < 2) {
        alert(n + " não é primo!");
    } else {
         p = true;
        for (var i = 2; i < n; i++) {
            if (n % i === 0) {
                p = false;
                break;
            }
        }
        
        
    }

 f = false;
 a = 0;
 b = 1;
while (b <= n) {
    if (b === n) {
        f = true;
        break;
    }
    aux = b;
    b = a + b;
    a = aux;
}


if (p) {
    alert(n + ' é primo!');
} else {
    alert(n + ' não é primo!');
}

if (f) {
    alert(n + ' está na sequência de Fibonacci!');
} else {
    alert(n + ' não está na sequência de Fibonacci!');
}
}

//Questão 12 

function quadrado(){
    n = parseFloat(prompt('Digite um numero: '))

    if (n < 0) {
        return false;
    }

    for (var i = 1; i <= n/2; i++) {
        if (i * i === n) {
            return true; 
        }
    }

    return false; 
}
