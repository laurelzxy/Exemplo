// Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
// semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
// 2 representa terça-feira e assim por diante.



let numero = prompt("digite um numero de 1 a 7")

if(numero === "1") {
    console.log("Segunda-feira");
}
else if(numero === "2") {
    console.log("Terça-feira")
}
if(numero === "3") {
    console.log("Quarta-feira");
}
else if(numero === "4") {
    console.log("Quinta-feira")
}
else if(numero === "5") {
    console.log("Sexta-feira")
}
else if(numero === "6") {
    console.log("Sabado")
}
else if(numero === "7") {
    console.log("Domingo")
}
else{
    console.log("Numero não encontrado") }
