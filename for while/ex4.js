let numTabuada = parseInt(prompt("Digite um numero que deseja ver na taubada"))

if(!isNaN(numTabuada)){

    for(let contador = 1; contador <= 10; contador ++){
        console.log(numTabuada + "x" + contador + "=" + (numTabuada * contador))
    }

} else {
    console.log("Numero invalido.Digite um numero válido")
}




