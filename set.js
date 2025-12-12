const prompt = require('prompt-sync')();

// Criamos um Set vazio para armazenar os números
let numeros = new Set();

console.log("Digite 10 números inteiros (valores repetidos serão ignorados):");

// Loop para ler 10 valores
for (let i = 0; i < 10; i++) {
    let entrada = prompt(`Digite o ${i + 1}º número: `);

    // Converte para número inteiro
    let numero = parseInt(entrada);

    // Verifica se realmente é um número
    if (isNaN(numero)) {
        console.log("Valor inválido! Digite um número inteiro.");
        i--; // volta 1 posição no loop
        continue;
    }

    // Adiciona ao Set (se for repetido, ele ignora automaticamente)
    numeros.add(numero);
}

// Exibe o conteúdo do Set
console.log("\nListar dados do Set:");
numeros.forEach(num => console.log(num));
