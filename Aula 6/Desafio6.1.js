// ## Opção Desafio 1

// **Tema do Exercício: Sistema de Entrega (Delivery) usando Programação Orientada a Objetos em JavaScript**

// **Requisitos:**

// 1. Criar um sistema simples de entrega (delivery) que consistirá em clientes, restaurantes e pedidos.
// 2. Cada cliente pode fazer pedidos em um ou mais restaurantes.
// 3. Cada restaurante possui um menu com itens e preços.
// 4. Cada pedido contém itens do menu, a quantidade desejada e o cliente que fez o pedido.
// 5. O sistema deve calcular o valor total de cada pedido e rastrear o status da entrega (pendente, em andamento, entregue).
// 6. Implementar métodos para exibir informações relevantes, como o menu do restaurante, os pedidos do cliente e o status da entrega.

// **Classes:**

// 1. `Cliente`: Representa um cliente. Atributos: `nome`, `endereço`.

console.clear()

class Cliente {
    constructor(nome, endereco) {
      this.nome = nome;
      this.endereco = endereco;
      this.pedidos = [];
    }
  
    fazerPedido(restaurante, itens) {
        const pedido = new Pedido(this,restaurante, itens);
        pedido.atualizarStatus("em andamento"); 
        this.pedidos.push(pedido);
        return pedido;
      }
  
    consultarPedidos() {
      return this.pedidos;
    }

  }
  
  
  
  class Pedido {
    constructor(cliente, restaurante, itens) {
        this.cliente = cliente;
        this.restaurante = restaurante;
        this.itens = itens 
        this.total = this.calcularTotal();
    }

   
    calcularTotal() {
        let total = 0;
        for (const item in this.itens) {
            total += this.restaurante.menu[item] * this.itens[item];
        }
        return total;
    }

    atualizarStatus(status) {
        this.status = status;
    }

    exibirDetalhesDoPedido() {
        console.log(`Pedido de ${this.cliente.nome} para ${this.restaurante.nome}:`);
        for (const item in this.itens) {
            console.log(`${item}: ${this.itens[item]} unidade(s)`);
        }
        console.log(`Total: R$${this.total}`);
        console.log(`Status: ${this.status}`);
    }

    finalizarPedido() {
        if (this.status === "em andamento") {
            this.atualizarStatus("Finalizado");
            console.log("Pedido finalizado!");
        } else if (this.status === "pendente") {
            console.log("O pedido ainda não foi processado pelo restaurante.");
        } else {
            console.log("O pedido já foi finalizado anteriormente.");
        }
    }
   
}
  class Restaurante {
    constructor(nome, menu) {
      this.nome = nome;
      this.menu = menu;
    }
  
    exibirMenu() {
      console.log(`\nMenu do ${this.nome}:`);
      for (const item in this.menu) {
        console.log(`${item}: R$${this.menu[item]}`);
      }
    }
  
    receberPedido(cliente, itens) {
        const pedido = new Pedido(cliente, this, itens);
           
        if (pedido.status === "pendente") {
          pedido.atualizarStatus("em andamento");
          console.log(`\nPedido do ${cliente.nome} recebido e em andamento.`);
        } else {
          console.log(`Pedido do ${cliente.nome} já está em andamento ou finalizado.`);
        }
      
        return pedido;
      }
    }
  // Exemplo de Uso:
const cliente1 = new Cliente("João", "Rua A, 123");
const cliente2 = new Cliente("Maria", "Rua B, 456");  // Novo cliente
const restaurante1 = new Restaurante("Restaurante A", {
  Pizza: 15,
  Hamburguer: 10,
  Salada: 8,
});
const restaurante2 = new Restaurante("Restaurante B", {
  Sushi: 25,
  Temaki: 15,
  Shimeji: 20,
});

// Exibir menu do restaurante
restaurante1.exibirMenu();
restaurante2.exibirMenu();

// Cliente1 faz pedidos em mais de um restaurante
const pedidoCliente1Restaurante1 = cliente1.fazerPedido(restaurante1, { Pizza: 2, Hamburguer: 1 });
const pedidoCliente1Restaurante2 = cliente1.fazerPedido(restaurante2, { Sushi: 2, Temaki: 1 });

// Restaurante recebe o pedido do Cliente1
restaurante1.receberPedido(cliente1, { Pizza: 2, Hamburguer: 1 });

// Cliente2 faz um pedido diferente
const pedidoCliente2Restaurante1 = cliente2.fazerPedido(restaurante1, { Salada: 1, Hamburguer: 2 });

// Restaurante recebe o pedido do Cliente2
restaurante1.receberPedido(cliente2, { Salada: 1, Hamburguer: 2 });

// Exibir os pedidos do Cliente1
console.log("\nPedidos do Cliente1:");
console.log(cliente1.consultarPedidos());

// Exibir os pedidos do Cliente2
console.log("\nPedidos do Cliente2:");
console.log(cliente2.consultarPedidos());

// Calcular o total de cada pedido do Cliente1
console.log(`Total do pedido do Cliente1 para o Restaurante1: R$${pedidoCliente1Restaurante1.calcularTotal()}`);
console.log(`Total do pedido do Cliente1 para o Restaurante2: R$${pedidoCliente1Restaurante2.calcularTotal()}`);
console.log (`Total de pedidos do Cliente1: R$${pedidoCliente1Restaurante1.calcularTotal()+pedidoCliente1Restaurante2.calcularTotal()}`)

// Calcular o total do pedido do Cliente2
console.log(`Total do pedido do Cliente2: R$${pedidoCliente2Restaurante1.calcularTotal()}`);

// Finalizar pedido do Cliente1
pedidoCliente1Restaurante1.finalizarPedido();
console.log(`Status do pedido do Cliente1 para o Restaurante1: ${pedidoCliente1Restaurante1.status}`);

pedidoCliente1Restaurante2.finalizarPedido();
console.log(`Status do pedido do Cliente1 para o Restaurante2: ${pedidoCliente1Restaurante2.status}`);

pedidoCliente2Restaurante1.finalizarPedido();
console.log(`Status do pedido do Cliente2 para o Restaurante1: ${pedidoCliente2Restaurante1.status}`);