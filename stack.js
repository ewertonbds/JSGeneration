const prompt = require("prompt-sync")();
class Stack {
    constructor() {
        this.items = []; // Array onde os livros serão armazenados
    }

    // Adiciona um item ao topo da pilha
    push(item) {
        this.items.push(item);
    }

    // Remove e retorna o item do topo da pilha
    pop() {
        return this.items.pop(); // pop() remove o último elemento do array
    }

    // Verifica se a pilha está vazia
    isEmpty() {
        return this.items.length === 0;
    }

    // Lista todos os itens da pilha
    list() {
        return this.items;
    }
}

// Criando uma pilha de livros
const pilha = new Stack();

let opcao;

// Loop principal do menu
do {
    console.log("************************************************************");
    console.log("                       MENU - PILHA                         ");
    console.log("************************************************************");
    console.log("1 - Adicionar Livro na pilha");
    console.log("2 - Listar todos os Livros");
    console.log("3 - Retirar Livro da pilha");
    console.log("0 - Sair");
    console.log("************************************************************");

    opcao = prompt("Entre com a opção desejada: ");

    switch (opcao) {

        case "1":
            const livro = prompt("Digite o nome do livro: ");
            pilha.push(livro);
            console.log(`Livro '${livro}' adicionado à pilha!\n`);
            break;

        case "2":
            console.log("\n Livros na pilha:");
            if (pilha.isEmpty()) {
                console.log("A pilha está vazia.\n");
            } else {
                pilha.list().forEach((livro, index) => {
                    console.log(`${index + 1}º - ${livro}`);
                });
                console.log();
            }
            break;

        case "3":
            if (pilha.isEmpty()) {
                console.log("\n A pilha está vazia! Não há livros para retirar.\n");
            } else {
                const livroRetirado = pilha.pop();
                console.log(`\n Livro retirado: ${livroRetirado}\n`);
            }
            break;

        case "0":
            console.log("\nEncerrando o programa...\n");
            break;

        default:
            console.log("\nOpção inválida! Tente novamente.\n");
    }

} while (opcao !== "0");