function numTabuada () {
    let opcaoMenu = prompt ("Digite um numero que deseja ver na taubada")

    if(!isNaN(numTabuada)){

        for(let contador = 1; contador <= 10; contador ++){
            console.log(numTabuada + "x" + contador + "=" + (numTabuada * contador))
        }
    
    } else {
        console.log("Numero invalido.Digite um numero válido")
    }
}

let opcao = prompt("Escolha uma opção: \n1 - Tabuada \n2 - exemplo repetição")

switch(opcao){
    case "1":
        numTabuada(console.log("Tabuada!!"))
        break;

    case "2":
        exemploRepeticao()
        break;

    default:
        break;

}