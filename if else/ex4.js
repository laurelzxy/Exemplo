// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
// notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
// notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

alert("Informe ás notas de 0 á 10")
let n1 = prompt('Digite a primeira nota do aluno')
let n2 = prompt('Digite a segunda nota do aluno')
let n3 = prompt('Digite a terceira nota do aluno')
let n4 = prompt('Digite a quarta nota do aluno')

let media =(n1+n2+n3+n4) / 4;

if(media >= 7.0) {
    console.log("APROVADO")
}

else if(media < 7 && media  >= 5.0) {
    console.log("RECUPERAÇÃO")
}
 else {
    console.log("REPROVADO")
 }




