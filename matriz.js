const prompt = require('prompt-sync')();

let matriz = [];
console.log("Digite os números da matriz 3x3 (3 números por linha):");

for (let i = 0; i < 3; i++) {
    let linhaValida = false;

    while (!linhaValida) {
        let input = prompt(`Linha ${i + 1}: `);

        // Divide em partes e converte para número
        let numeros = input.split(" ").map(Number);

        // Verifica se há exatamente 3 números válidos
        if (numeros.length === 3 && numeros.every(n => !isNaN(n))) {
            matriz.push(numeros);
            linhaValida = true;
        } else {
            console.log("Erro: Digite exatamente 3 números separados por espaço!");
        }
    }
}

// Agora processamos as diagonais
let diagPrin = [];
let diagSec = [];

let somaPrin = 0;
let somaSec = 0;

for (let i = 0; i < 3; i++) {
    diagPrin.push(matriz[i][i]);
    somaPrin += matriz[i][i];

    diagSec.push(matriz[i][2 - i]);
    somaSec += matriz[i][2 - i];
}

console.log("\n===== RESULTADOS =====");

console.log("\nElementos da Diagonal Principal:");
console.log(diagPrin.join(" "));

console.log("\nElementos da Diagonal Secundária:");
console.log(diagSec.join(" "));

console.log("\nSoma dos Elementos da Diagonal Principal:");
console.log(somaPrin);

console.log("\nSoma dos Elementos da Diagonal Secundária:");
console.log(somaSec);
