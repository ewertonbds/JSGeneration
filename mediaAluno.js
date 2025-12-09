const prompt = require('prompt-sync')({sigint: true});

const nota1 = parseFloat(prompt("Digite a primeira nota: "));
const nota2 = parseFloat(prompt("Digite a segunda nota: "));
const nota3 = parseFloat(prompt("Digite a terceira nota: "));
const nota4 = parseFloat(prompt("Digite a quarta nota: "));

const media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log("Média final: " + media.toFixed(1));