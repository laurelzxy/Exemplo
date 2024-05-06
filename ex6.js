// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

let data = parseInt(prompt("Digite sua data de nascimento:"))

let idade = (2024 - data)

if (data>18) {
    console.log("Voce é maior de idade")
}
 else {
    console.log("Voce não é maior de idade")
 }