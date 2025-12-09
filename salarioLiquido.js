const prompt = require('prompt-sync')({sigint: true});

let salarioBruto = parseFloat(prompt("Digite o salário bruto: "));
let adicionalNoturno = parseFloat(prompt("Digite o adicional noturno: "));
let horasExtras = parseFloat(prompt("Digite as horas extras: "));
let descontos = parseFloat(prompt("Digite os descontos: "));

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log("Salário Líquido: " + salarioLiquido.toFixed(2));