// ## Opção Desafio 4

// **Tema do Exercício: Sistema de Controle de Estoque com Programação Orientada a Objetos em JavaScript**

// **Requisitos:**

// 1. Criar um sistema de controle de estoque que gerencie produtos, categorias e movimentações de estoque.
// 2. Cada produto possui um nome, preço, quantidade em estoque e pertence a uma categoria.
// 3. O sistema deve permitir a adição de produtos, categorias e a realização de movimentações de entrada ou saída de estoque.
// 4. Implementar métodos para calcular o valor total em estoque, exibir informações sobre produtos e categorias, e rastrear o histórico de movimentações.
// 5. O sistema deve validar operações que resultem em estoque negativo.
// 6. Utilizar um exemplo de um software de mercado, como um sistema de controle de estoque de um supermercado.

// **Classes:**

// 1. `Produto`: Representa um produto no estoque. Atributos: `nome`, `preco`, `quantidade`, `categoria`.
// 2. `Categoria`: Representa uma categoria de produtos. Atributos: `nome`.
// 3. `MovimentacaoEstoque`: Representa uma movimentação de entrada ou saída de estoque. Atributos: `produto`, `quantidade`, `tipo` (entrada, saída), `data`.
// 4. `Estoque`: Representa o estoque geral do sistema. Atributos: `produtos`, `categorias`, `movimentacoes`.

// - Métodos: `adicionarProduto(produto)`, `adicionarCategoria(categoria)`, `realizarMovimentacao(movimentacao)`, `calcularValorTotal()`, `exibirInformacoesProduto(produto)`, `exibirInformacoesCategoria(categoria)`, `exibirHistoricoMovimentacoes()`.

// **Exemplo de Uso:**

// ```javascript
// Criar instâncias de Produto, Categoria, MovimentacaoEstoque e Estoque
 const categoriaAlimentos = new Categoria("Alimentos");
 const produtoArroz = new Produto("Arroz", 10, 50, categoriaAlimentos);
 const produtoFeijao = new Produto("Feijão", 8, 30, categoriaAlimentos);

 const movimentacaoEntrada = new MovimentacaoEstoque(
  produtoArroz,
   20,
   "entrada",
   new Date("2023-01-15")
 );
const movimentacaoSaida = new MovimentacaoEstoque(
   produtoFeijao,
   10,
   "saída",
   new Date("2023-01-16")
);

 const sistemaEstoque = new Estoque();
 sistemaEstoque.adicionarCategoria(categoriaAlimentos);
 sistemaEstoque.adicionarProduto(produtoArroz);
 sistemaEstoque.adicionarProduto(produtoFeijao);
 sistemaEstoque.realizarMovimentacao(movimentacaoEntrada);
 sistemaEstoque.realizarMovimentacao(movimentacaoSaida);

 // Exibir informações sobre o estoque
 console.log(`Valor total em estoque: R${sistemaEstoque.calcularValorTotal().toFixed(2)}`);
 sistemaEstoque.exibirInformacoesProduto(produtoArroz);
 sistemaEstoque.exibirInformacoesCategoria(categoriaAlimentos);
 sistemaEstoque.exibirHistoricoMovimentacoes();
