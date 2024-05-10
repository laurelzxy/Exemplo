function numTabuada() {
    let numTabuada = prompt("Digite um numero que deseja ver na taubada")

    if (!isNaN(numTabuada)) {

        for (let contador = 1; contador <= 10; contador++) {
            console.log(numTabuada + "x" + contador + "=" + (numTabuada * contador))
        }

    } else {
        console.log("Numero invalido.Digite um numero válido")
    }
}

function numImpares() {

    let num = 1
    for (let num = 1; num <= 50; num++) {
        if (num % 2 == 1) {
            console.log(num)
        }
    }
}

function numSoma() {
    let a = 1
    let b = 0
    while (a <= 100) {
        b += a++
    }
    console.log("a soma dos numeros de 1 a 100 é: " + b);
}

function Cont() {
    let numero = parseInt(prompt("Digite um numero para a contagem regressiva"))

    console.log("Contagem regressiva esta começando em : " + numero)

    while (numero >= 0) {
        console.log(numero);
        numero--;
    }
    console.log("Contagem regressiva finalizada")
}

function Fibonacci() {
    b = 1
    a = 0
    c = 0
    for (let i = 1; i <= 10; i++) {
        console.log(c);

        c = a + b
        b = a
        a = c
    }
}

function Notas() {

    alert("Informe ás notas de 0 á 10")
    let n1 = parseInt(prompt('Digite a primeira nota do aluno'))
    let n2 = parseInt(prompt('Digite a segunda nota do aluno'))
    let n3 = parseInt(prompt('Digite a terceira nota do aluno'))
    let n4 = parseInt(prompt('Digite a quarta nota do aluno'))

    let media = (n1 + n2 + n3 + n4) / 4;

    if (media >= 7) {
        console.log("APROVADO")
    }

    else if (media < 7 && media >= 5) {
        console.log("RECUPERAÇÃO")
    }
    else {
        console.log("REPROVADO")
    }
}



let opcao;

while (opcao != 0) {
    opcao = parseInt(prompt("Escolha uma opção: \n0 Digite 0 para sair. \n1 - Tabuada. \n2 - Numeros Impares até 50.\n3 - Soma dos numeros de 1 a 100\n4 - Contagem Regressiva.\n5 - Os primeiros 10 números da sequência de Fibonacci.\n6 - Notas Escolares."))
    switch (opcao) {
        case 1:
            numTabuada(console.log("Tabuada!!"));
            break;

        case 2:
            numImpares("Numeros impares até 50");
            break;

        case 3:
            numSoma("soma dos numeros de 1 a 100");
            break;

        case 4:
            Cont("Contagem Regressiva");
            break;

        case 5:
            Fibonacci("Sequência de Fibonacci.");
            break;

        case 6:
            Notas("Media Escolar");
            break;

        default:
            break;

    }
}