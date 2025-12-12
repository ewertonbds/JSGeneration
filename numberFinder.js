const prompt = require("prompt-sync")();

// Vetor com 10 números
let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

// Mostrando o vetor ao usuário
console.log("Vetor:", vetor);

// Lendo o número que o usuário deseja encontrar
let numero = parseInt(prompt("Digite o número que você deseja encontrar: "));

let posicao = -1;  // variável para armazenar a posição do número no vetor

// Percorrendo o vetor para encontrar o número digitado
for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numero) {
        posicao = i;
        break; // encerra o loop quando o número é encontrado
    }
}

// Exibindo o resultado
if (posicao === -1) {
    console.log(`O número ${numero} não foi encontrado!`);
} else {
    console.log(`O número ${numero} está localizado na posição: ${posicao}`);
}
