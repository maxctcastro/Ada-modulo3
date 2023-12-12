console.clear()
// Exercicio 1

// Objetivo: Criar uma função que recebe uma lista de números e retorna a soma dos quadrados dos números pares.

function somaQuadradosPares(lista) {
    // Filtra os números pares da lista
    const numerosPares = lista.filter(numero => numero % 2 === 0);
  
    // Eleva cada número par ao quadrado
    const quadrados = numerosPares.map(numero => numero ** 2);
  
    // Calcula a soma dos quadrados
    const soma = quadrados.reduce((acumulador, valor) => acumulador + valor, 0);
  
    // Retorna o resultado
    return soma;
  }
  
  // Exemplo de uso:
  const Numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const resultado = `A soma dos quadrados pares é: ${somaQuadradosPares(Numeros)}`;
  console.log(resultado); 

// Exercício 2:

// Objetivo: Criar uma função que recebe uma lista de palavras e retorna uma nova lista com as palavras ordenadas por tamanho, da menor para a maior.

function ordenarPorTamanho (Palavras) {

     // Formata a primeira letra de cada palavra para maiúscula
    const listaFormatada = Palavras.map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1));

    // Utiliza o método sort() para ordenar as palavras por tamanho
    const listaOrdenada = listaFormatada.sort((a,b) => (a.length - b.length));
   
    return listaOrdenada
}

// Exemplo de uso:

const Palavras = ['beatriz', 'max', 'fernanda', 'eloisa', 'justino', 'patricia', 'allan']
const listaOrdenada = ordenarPorTamanho(Palavras)
console.log(listaOrdenada)


// Exercício 3
// Objetivo: Criar uma função que recebe uma lista de números e retorna a média dos números ímpares.

function mediaNumerosImpares(listaNumeros) {
    const numerosImpares = listaNumeros.filter(numero => numero % 2 !== 0);

    const somaNumeros = numerosImpares.reduce((acumulador, valor) => acumulador + valor, 0);

    const media = somaNumeros/numerosImpares.length;

    return media
    
}

// Exemplo de uso: 
const listaNumeros = [1,2,3,4,5,6,7,8,9,10]
const mediaNumeros = `A media dos Números Ímpares é: ` + mediaNumerosImpares(listaNumeros)

console.log(mediaNumeros)