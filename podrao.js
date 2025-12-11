const prompt = require("prompt-sync")({ sigint: true });

let codigo = parseInt(prompt("Digite o código do produto (1 a 6): "));
let quantidade = parseInt(prompt("Digite a quantidade: "));

let produto = "";
let preco = 0;

switch (codigo) {
    case 1:
        produto = "Cachorro Quente";
        preco = 10.00;
        break;
    case 2:
        produto = "X-Salada";
        preco = 15.00;
        break;
    case 3:
        produto = "X-Bacon";
        preco = 18.00;
        break;
    case 4:
        produto = "Bauru";
        preco = 12.00;
        break;
    case 5:
        produto = "Refrigerante";
        preco = 8.00;
        break;
    case 6:
        produto = "Suco de Laranja";
        preco = 13.00;
        break;
    default:
        console.log("Código inválido! Digite um código entre 1 e 6.");
        return;
}

let total = quantidade * preco;

console.log(`\nProduto: ${produto}`);
console.log(`Valor total: R$ ${total.toFixed(2)}`);
