const prompt = require('prompt-sync')();

// Criamos um array vazio para armazenar as cores
let cores = [];

console.log("Digite 5 cores:");

// Laço que executa 5 vezes para pedir as cores
for (let i = 0; i < 5; i++) {
    let cor = prompt(`Digite a ${i + 1}ª cor: `);
    cores.push(cor); // Adiciona a cor digitada no array
}

// Mostrar todas as cores na ordem digitada
console.log("\nListar todas as cores:");
cores.forEach(cor => console.log(cor));

// Ordenar as cores em ordem alfabética
let coresOrdenadas = [...cores].sort();

// Mostrar todas as cores ordenadas
console.log("\nOrdenar as cores:");
coresOrdenadas.forEach(cor => console.log(cor));