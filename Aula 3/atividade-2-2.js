// Exercício 2: Sistema de E-commerce

// Cenário:
// Crie um sistema de e-commerce com as classes Produto, Carrinho, e Cliente. Os produtos devem ter nome, preço e quantidade em estoque. Os clientes têm um carrinho de compras, onde podem adicionar e remover produtos.

// Requisitos:

// - Utilize encapsulamento para proteger as propriedades dos produtos, como o estoque.
// - Implemente herança para criar diferentes tipos de produtos, como ProdutoEletronico e ProdutoAlimenticio.
// - Utilize polimorfismo para calcular o preço total no carrinho, levando em consideração descontos ou promoções específicas para determinados tipos de produtos.


console.clear()

class Produto {
    #nome
    #valor
    #quantidadeEstoque

    constructor(nome, valor, quantidadeEstoque) {
        this.#nome = nome;
        this.#valor = valor;
        this.#quantidadeEstoque = quantidadeEstoque || 0;
    }
    // Métodos get para acessar as propriedades privadas.
    get nome() {
        return this.#nome;
    }

    get preco() {
        return this.#valor;
    }

    get quantidadeEstoque() {
        return this.#quantidadeEstoque;
    }

    set quantidadeEstoque(quantidade) {
        if (quantidade >= 0) {
            this.#quantidadeEstoque = quantidade;
        } else {
            console.log('Quantidade em estoque não pode ser negativa.');
        }
    }
    
    exibirDetalhes() {
        console.log(`Nome: ${this.nome}, Preço: ${this.preco}, Estoque: ${this.quantidadeEstoque}`);
    }
}

class Carrinho {
    produtos = [];

    adicionarProduto(produto) {
        // verifica se o objeto produto é uma instância da classe (ou tipo) Produto. verifica se o produto é válido e se há estoque disponível.
        if (produto instanceof Produto && produto.quantidadeEstoque > 0) {
            const produtoNoCarrinho = this.produtos.find(item => item.produto.nome === produto.nome);

            if (produtoNoCarrinho) {
                produtoNoCarrinho.quantidade++;
            } else {
                this.produtos.push({ produto, quantidade: 1 });
            }

            produto.quantidadeEstoque--;
            console.log(`${produto.nome} adicionado ao carrinho.`);
            console.log(`Novo estoque: ${produto.quantidadeEstoque}`);
        } else {
            console.log('Produto inválido ou sem estoque disponível.');
        }
    }

    removerProduto(nomeProduto) {
        const produtoNoCarrinho = this.produtos.find(item => item.produto.nome === nomeProduto);

        if (produtoNoCarrinho) {
            if (produtoNoCarrinho.quantidade > 0) {
                produtoNoCarrinho.quantidade--;
                console.log(`Quantidade de ${produtoNoCarrinho.produto.nome} foi reduzida no carrinho. Novo total: ${produtoNoCarrinho.quantidade}`);
            }

            if (produtoNoCarrinho.quantidade === 0) {
                this.produtos = this.produtos.filter(item => item !== produtoNoCarrinho);
                console.log(`${produtoNoCarrinho.produto.nome} removido do carrinho`);
            }
        } else {
            console.log('Produto não encontrado no carrinho.');
        }
    }

    calcularPrecoTotal() {
        return this.produtos.reduce((total, item) => total + (item.produto.preco * item.quantidade), 0);
    }

    exibirDetalhes() {
        console.log('Produtos no Carrinho:');
        this.produtos.forEach(item => {
            const produto = item.produto;
            console.log(`Nome: ${produto.nome}, Quantidade: ${item.quantidade}, Preço sem desconto: ${produto.preco}, Preço com desconto: ${produto.calcularPrecoComDesconto() }`);
        });
    }

    calcularPrecoTotalComDesconto() {
        return this.produtos.reduce((total, item) => {
            const precoComDesconto = item.produto.calcularPrecoComDesconto() * item.quantidade;
            console.log(`Produto: ${item.produto.nome}, Preço Com Desconto: ${precoComDesconto.toFixed(2)}`);
            return total + precoComDesconto;
        }, 0);
    }
}

class Cliente {
    #carrinho;

    constructor() {
        this.#carrinho = new Carrinho();
    }

    get carrinho() {
        return this.#carrinho;
    }
}

class ProdutoEletronico extends Produto {
    constructor(nome, valor, quantidadeEstoque, garantiaMeses) {
        super(nome, valor, quantidadeEstoque);
        this.garantiaMeses = garantiaMeses;
    }

    calcularPrecoComDesconto() {
        const descontoEletronico = 0.9; 
        return this.preco * descontoEletronico;
    }
}

class ProdutoAlimenticio extends Produto {
    constructor(nome, valor, quantidadeEstoque, dataValidade) {
        super(nome, valor, quantidadeEstoque);
        this.dataValidade = dataValidade;
    }

    calcularPrecoComDesconto() {
        const descontoAlimenticio = 0.8; 
        return this.preco * descontoAlimenticio;
    }
}

// Criando instâncias
const produtoEletronico = new ProdutoEletronico('Smartphone', 1500, 10, 12);
const produtoAlimenticio = new ProdutoAlimenticio('Chocolate', 5, 20, '2023-12-31');
const cliente = new Cliente();

// Adicionando produtos ao carrinho
cliente.carrinho.adicionarProduto(produtoEletronico);
cliente.carrinho.adicionarProduto(produtoEletronico);
cliente.carrinho.adicionarProduto(produtoAlimenticio);

// Exibindo detalhes do carrinho e produtos
console.log('--------Produtos do carrinho-------');
cliente.carrinho.exibirDetalhes();

console.log('--------Calculando preço com desconto-------');
console.log('Preço total no carrinho:', cliente.carrinho.calcularPrecoTotal());
console.log('Preço total com desconto no carrinho:', cliente.carrinho.calcularPrecoTotalComDesconto());

// Removendo produtos do carrinho
console.log('--------Removendo produtos do carrinho-------');
cliente.carrinho.removerProduto('Smartphone');
console.log('Preço total com desconto no carrinho após remover produtos:', cliente.carrinho.calcularPrecoTotalComDesconto());
cliente.carrinho.removerProduto('Chocolate');
console.log('Preço total com desconto no carrinho após remover produtos:', cliente.carrinho.calcularPrecoTotalComDesconto());
