const prompt = require("prompt-sync")();

let soma = 0;
let numero;

do {
    numero = parseInt(prompt("Digite um número: "));

    if (numero > 0) {
        soma += numero; 
    }

} while (numero !== 0);

console.log("A soma dos números positivos é: " + soma);