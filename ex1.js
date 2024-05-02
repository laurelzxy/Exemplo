// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é &quot;admin&quot; e a senha é &quot;senha123&quot;. Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.

let username = prompt("Digite um nome de usuario")
let senha = prompt("Digite a senha")


if(username == "admin" && senha == "senha123") {
    console.log("login bem sucedido");
} else {
    console.log("Voce não tem permissão de acesso!")
}




// if (username == "admin") {
//     console.log("Voce é admin");
//     if(senha === '123') {
//         console.log("bem vindo ADMIN! ");
//     }

    
// }

// == Verifica se um valor é igual á outro - true 
// === Verifica se o valor e o tipo dos itens sáo iguais  -false

// console.log.( 1 == 1 )
