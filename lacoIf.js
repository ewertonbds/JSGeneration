const prompt = require("prompt-sync")({ sigint: true });

let A = parseInt(prompt("Digite o número A: "));
let B = parseInt(prompt("Digite o número B: "));
let C = parseInt(prompt("Digite o número C: "));

let soma = A + B;

console.log(`${A} + ${B} = ${soma}`);

if (soma > C) {
    console.log(`${soma} > ${C}`);
    console.log("A Soma de A + B é Maior do que C");
} else if (soma < C) {
    console.log(`${soma} < ${C}`);
    console.log("A Soma de A + B é Menor do que C");
} else {
    console.log(`${soma} = ${C}`);
    console.log("A Soma de A + B é Igual a C");
}