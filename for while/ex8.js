let idade = 0

while(idade < 18 || isNaN(idade)){
    idade = parseInt(prompt("Digite sua idade:"))
    if(isNaN(idade) === false && idade >= 0 && idade < 18){
        console.log("voce é menor de 18")
    }
    
    
    else if (isNaN(idade)) {
        console.log("E necessario informar um numero inteiro positivo")
    }
}
console.log("Voce é maior de idade")


