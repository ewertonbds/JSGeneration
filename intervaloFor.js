const prompt = require("prompt-sync")({ sigint: true });

let inicio = parseInt(prompt("Digite o primeiro número do intervalo: "));
let fim = parseInt(prompt("Digite o último número do intervalo: "));

if (inicio > fim) {
    console.log("Intervalo inválido!");
    return;
}

console.log(`\n No intervalo entre ${inicio} e ${fim}:`);

for (let i = inicio; i <= fim; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} é múltiplo de 3 e 5`);
    }
}