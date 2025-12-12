const prompt = require("prompt-sync")();

// Cria uma classe Queue (Fila)
class Queue {
    constructor() {
        this.items = []; // Array interno que armazenará os elementos da fila
    }

    // Adiciona um item ao final da fila
    enqueue(item) {
        this.items.push(item);
    }

    // Remove e retorna o primeiro item da fila
    dequeue() {
        return this.items.shift(); // shift() remove o primeiro elemento do array
    }

    // Retorna true se a fila estiver vazia
    isEmpty() {
        return this.items.length === 0;
    }

    // Lista todos os itens da fila
    list() {
        return this.items;
    }
}

// Criando uma fila de clientes
const fila = new Queue();

let opcao;

// Loop principal do menu
do {
    console.log("************************************************************");
    console.log("                   MENU - FILA DE CLIENTES                  ");
    console.log("************************************************************");
    console.log("1 - Adicionar Cliente na Fila");
    console.log("2 - Listar todos os Clientes");
    console.log("3 - Retirar Cliente da Fila");
    console.log("0 - Sair");
    console.log("************************************************************");

    opcao = prompt("Entre com a opção desejada: ");

    switch (opcao) {

        case "1":
            const nome = prompt("Digite o nome do cliente: ");
            fila.enqueue(nome);
            console.log(`Cliente '${nome}' adicionado à fila!\n`);
            break;

        case "2":
            console.log("\n Clientes na fila:");
            if (fila.isEmpty()) {
                console.log("A fila está vazia.\n");
            } else {
                fila.list().forEach((cliente, index) => {
                    console.log(`${index + 1}º - ${cliente}`);
                });
                console.log();
            }
            break;

        case "3":
            if (fila.isEmpty()) {
                console.log("\n A fila está vazia! Não há clientes para chamar.\n");
            } else {
                const clienteChamado = fila.dequeue();
                console.log(`\nCliente chamado: ${clienteChamado}\n`);
            }
            break;

        case "0":
            console.log("\nEncerrando o programa...\n");
            break;

        default:
            console.log("\nOpção inválida! Tente novamente.\n");
    }

} while (opcao !== "0");
