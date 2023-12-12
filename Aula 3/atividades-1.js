// // Exercício 1: Sistema de Login em JavaScript

// Requisitos:

// Desenvolva um sistema de login simples em JavaScript utilizando POO. O sistema deve permitir que usuários se cadastrem, realizem login e exibam uma mensagem personalizada após o login.
console.clear()
console.log('--------------EXERCICIO1-----------------')
class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.senha = senha;
    }
}

class SistemaDeLogin {
    constructor() {
        this.usuarios = [];
    }

    cadastrarUsuario(nome, senha) {
        const novoUsuario = new Usuario(nome, senha);
        this.usuarios.push(novoUsuario);
        console.log(`Usuario ${nome} cadastrado com sucesso!`);
    }

    realizarLogin(nome, senha) {
        const usuarioEncontrado = this.usuarios.find(usuario => usuario.nome === nome && usuario.senha === senha);
        if (usuarioEncontrado) {
            console.log(`Login bem-sucedido para ${nome}.`);
            return usuarioEncontrado; // Retorna o usuário logado
        } else {
            console.log('Nome de usuário ou senha incorretos.');
            return null; // Retorna null se o login falhar
        }
    }

    exibirMensagemPersonalizada(usuario) {
        console.log(`Bem-vindo, ${usuario.nome}! Você está logado.`);
    }
}

// Exemplo de Uso:

// Criando instância do sistema de login
const sistemaLogin = new SistemaDeLogin();

// Cadastrando usuários
sistemaLogin.cadastrarUsuario("usuario1", "senha123");
sistemaLogin.cadastrarUsuario("usuario2", "abc456");

// Realizando login e exibindo mensagem personalizada
const usuarioLogado = sistemaLogin.realizarLogin("usuario1", "senha123");

if (usuarioLogado) {
    sistemaLogin.exibirMensagemPersonalizada(usuarioLogado);
} else {
    console.log("Falha no login.");
}

const usuarioLogado2 = sistemaLogin.realizarLogin("usuario2", "abc456");

if (usuarioLogado2) {
    sistemaLogin.exibirMensagemPersonalizada(usuarioLogado2);
} else {
    console.log("Falha no login.");
}


// Exercício 2: Conversor de Moeda em JavaScript

// Requisitos:

// Crie um conversor de moeda simples em JavaScript utilizando POO. O conversor deve permitir a conversão de uma moeda para outra com base em uma taxa de câmbio.


console.log('--------------EXERCICIO2-----------------')


class ConversorDeMoeda {
constructor(taxaCambio){
    this.taxaCambio = taxaCambio;
}

converter (valor, moedaOrigem, moedaDestino){
 const valorConvertido = valor*this.taxaCambio
 console.log(`${valor} ${moedaOrigem} equivalem a ${valorConvertido} ${moedaDestino}`);
        return valorConvertido;
}
}

// Criando instância do conversor de moeda
const conversorMoeda = new ConversorDeMoeda(5.0); // Taxa de câmbio: 5.0

// Convertendo moeda
const valorConvertido = conversorMoeda.converter(100, 'USD', 'BRL');
console.log(`Valor convertido: ${valorConvertido} BRL`);
// Saída esperada: Valor convertido: 500.0 BRL```



// EXERCICIO 3

// # Contador de Palavras em JavaScript

// Requisitos:

// Implemente um contador de palavras em JavaScript utilizando POO. O contador deve receber uma string como entrada e fornecer a contagem de palavras.

console.log('--------------EXERCICIO3-----------------')

class ContadorDePalavras {
    constructor() {
        this.contagem = 0;
    }

    contarPalavras(texto) {
        // Remove espaços no início e no final e divide a string em palavras
        const palavras = texto.trim().split(' ');
        this.contagem = palavras.length;
        console.log(`Número de palavras: ${this.contagem}`);
        return this.contagem;
    }
}
// Exemplo de Uso:

// Criando instância do contador
const contador = new ContadorDePalavras();

// Contando palavras em uma string
const Contador = contador.contarPalavras("JavaScript é uma linguagem poderosa.");




