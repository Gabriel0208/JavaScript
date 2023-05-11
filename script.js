function inserirdados(a) {
    tabela = document.getElementById("Tabela")
    matricula = prompt('Digite sua matricula: ')
    nome = prompt('Digite seu nome: ')
    faltas = parseInt(prompt('Digite seu número de faltas: '))
    b1 = parseFloat(prompt('Digite sua nota b1: '))
    b2 = parseFloat(prompt('Digite sua nota b2: '))
    m = (b1 + b2) / 2
    pr = parseFloat(prompt('Digite sua nota: '))
    mf = m
    tf = (faltas / a) * 100

    if (tf > 25) {
        s = 'Reprovado'
        alert('Você foi reprovado por falta')
    } else {
        if (m >= 7) {
            s = 'Aprovado'
            alert('Você foi aprovado')
        } else if (m < 7) {
            mf = (pr + m) / 2
            if (mf >= 5) {
                s = 'Aprovado'
                alert('Você foi aprovado')
            }
            else {
                s = 'Reprovado'
                alert('Você foi reprovado')
            }
        } else {
            s = 'Reprovado'
            alert('Você foi reprovado')
        }
    }

    linha = tabela.insertRow(-1);
    linha.insertCell(0).innerText = matricula;
    linha.insertCell(1).innerText = nome;
    linha.insertCell(2).innerText = faltas;
    linha.insertCell(3).innerText = b1.toFixed(1);;
    linha.insertCell(4).innerText = b2.toFixed(1);;
    linha.insertCell(5).innerText = m.toFixed(1);
    linha.insertCell(6).innerText = pr.toFixed(1);
    linha.insertCell(7).innerText = mf.toFixed(1);
    linha.insertCell(8).innerText = s;
}
