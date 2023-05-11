function inserirdados(a) {
    tabela = document.getElementById("Tabela")
    matricula = prompt('Digite sua matricula: ')
    nome = prompt('Digite seu nome: ')
    faltas = parseInt(prompt('Digite seu número de faltas: '))
    b1 = parseFloat(prompt('Digite sua nota b1: '))
    b2 = parseFloat(prompt('Digite sua nota b2: '))
    m = (b1 + b2) / 2
    pr = parseFloat(prompt('Digite sua nota: '))
    mf = (pr + m) / 2
    tf = (faltas / a) * 100

    if (tf > 25) {
        s = 'Reprovado'
        alert('Você foi reprovado')
    } else {
        if (m >= 7) {
            s = 'Aprovado'
            alert('Você foi aprovado')
        } else if (mf >= 5) {
            s = 'Aprovado'
            alert('Você foi aprovado')
        } else {
            s = 'Reprovado'
            alert('Você foi reprovado')
        }
    }

    linha = tabela.insertRow(-1);
    linha.insertCell(0).innerText = matricula;
    linha.insertCell(1).innerText = nome;
    linha.insertCell(2).innerText = faltas;
    linha.insertCell(3).innerText = b1;
    linha.insertCell(4).innerText = b2;
    linha.insertCell(5).innerText = m.toFixed(2);
    linha.insertCell(6).innerText = pr.toFixed(2);
    linha.insertCell(7).innerText = mf.toFixed(2);
    linha.insertCell(8).innerText = s;
}
