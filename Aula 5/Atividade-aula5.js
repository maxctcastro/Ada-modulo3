//1. Sistema de Gerenciamento de Biblioteca
class Livro {
    #nome;
    #autor;

    constructor(nome, autor) {
        this.#nome = nome;
        this.#autor = autor;
    }

    getNome() {
        return this.#nome;
    }

    getAutor() {
        return this.#autor;
    }
}

class Biblioteca {
    #livros;

    constructor() {
        this.#livros = [];
    }

    getLivros() {
        return this.#livros;
    }

    adicionarLivro(livro) {
        this.#livros.push(livro);
        console.log (`O livro ${livro.getNome()} foi adicionado a biblioteca`)
    }

    removerLivro(nomeLivro) {
        this.#livros = this.#livros.filter((livro) => livro.getNome() !== nomeLivro);
        console.log (`O livro ${nomeLivro} foi removido da biblioteca`)
    }

    listarLivros() {
        console.log(this.#livros.map(livro => `${livro.getNome()} (${livro.getAutor()})`).join('\n'));
    }
}

const macunaima = new Livro('Macunaíma', 'Mário de Andrade');
const domCasmurro = new Livro('Dom Casmurro', 'Machado de Assis');
const brasCubas = new Livro('Memórias Póstumas de Brás Cubas', 'Machado de Assis');

const biblioteca = new Biblioteca();
biblioteca.adicionarLivro(macunaima);
biblioteca.adicionarLivro(domCasmurro);
biblioteca.adicionarLivro(brasCubas);

biblioteca.listarLivros();
biblioteca.removerLivro('Macunaíma');
biblioteca.listarLivros();