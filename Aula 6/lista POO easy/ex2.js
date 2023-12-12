console.clear()

console.log ('EXERCICIO 2')

// **Exercício 2: Sistema de Gestão de Estoque**

// Crie um sistema de gestão de estoque com classes como `Produto`, `Fornecedor`, `Pedido` e `Estoque`. Os produtos têm atributos como nome, preço e quantidade em estoque. O sistema deve permitir o registro de pedidos de reposição de estoque.

// - **Classes:**

// 1. `Produto`: Representa um produto com informações como nome, preço e quantidade em estoque.
// 2. `Fornecedor`: Representa um fornecedor de produtos.
// 3. `Pedido`: Representa um pedido de reposição de estoque feito pelo estoque ao fornecedor.
// 4. `Estoque`: Representa o estoque da empresa e possui uma lista de produtos.

// - **Requisitos:**

// 1. O sistema deve permitir a adição de novos produtos ao estoque.
// 2. Pedidos de reposição só podem ser feitos se a quantidade em estoque de um produto estiver abaixo de um limite mínimo.
// 3. Implementar métodos para registrar a chegada de novos produtos após um pedido.

class Produto {
    constructor(nome, preco, quantidadeEstoque, estoqueMinimo) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEstoque = quantidadeEstoque;
        this.estoqueMinimo = estoqueMinimo;
    }
}

class Fornecedor {
    constructor(nome) {
        this.nome = nome;
    }
}

class Pedido {
    constructor(fornecedor, produto, quantidade) {
        this.fornecedor = fornecedor;
        this.produto = produto;
        this.quantidade = quantidade;
    }
}

class Estoque {
    constructor() {
        this.produtos = [];
        this.pedidos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    realizarPedido(fornecedor, produto, quantidade) {
        const produtoExistente = this.produtos.find(p => p.nome === produto.nome);

        if (produtoExistente && produtoExistente.quantidadeEstoque < produtoExistente.estoqueMinimo) {
            const pedido = new Pedido(fornecedor, produto, quantidade);
            this.pedidos.push(pedido);

            console.log(`Pedido de reposição de ${quantidade} unidades do produto "${produto.nome}" feito ao fornecedor ${fornecedor.nome}.`);
        } else {
            console.log(`Pedido de reposição não necessário para o produto "${produto.nome}".`);
        }
    }

    receberPedido() {
        const pedidoRecebido = this.pedidos[0];

        if (pedidoRecebido && pedidoRecebido.produto) {
            const produtoExistente = this.produtos.find(p => p.nome === pedidoRecebido.produto.nome);

            if (produtoExistente) {
                produtoExistente.quantidadeEstoque += pedidoRecebido.quantidade;
                console.log(`Pedido recebido para o produto "${pedidoRecebido.produto.nome}" e estoque atualizado.`);
            } else {
                console.log(`Erro: Produto "${pedidoRecebido.produto.nome}" não encontrado no estoque.`);
            }
        } else {
            console.log(`Erro: Pedido inválido.`);
        }
    }

    exibirEstoque() {
        console.log("\nEstoque:");
        this.produtos.forEach(produto => {
            console.log(`- ${produto.nome}: R$${produto.preco.toFixed(2)} | Quantidade: ${produto.quantidadeEstoque}`);
        });
    }
}

// Exemplo de uso:
const fornecedorA = new Fornecedor("Fornecedor A");
const estoqueEmpresa = new Estoque();

const produto1 = new Produto("Camiseta", 20.99, 20, 10);
const produto2 = new Produto("Calça Jeans", 49.99, 15, 17);

estoqueEmpresa.adicionarProduto(produto1);
estoqueEmpresa.adicionarProduto(produto2);

estoqueEmpresa.exibirEstoque();

estoqueEmpresa.realizarPedido(fornecedorA, produto1, 30); 
estoqueEmpresa.realizarPedido(fornecedorA, produto2, 10); 

estoqueEmpresa.exibirEstoque();

estoqueEmpresa.receberPedido();

estoqueEmpresa.exibirEstoque();