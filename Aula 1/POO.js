class Pessoa {
    nome;
    idade;
    cidade;

    constructor(nome, idade, cidade, bissexto = false) {
      this.nome = nome;
      this.idade = idade;
      this.cidade = cidade;
      this.bissexto = bissexto
    }
  
    calcularIdadeBissextos(ano) {
        const anoAtual = new Date().getFullYear()
        const anoNascimento = anoAtual - this.idade;

      // Verifica se o ano é bissexto
      if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)){
        this.bissexto = true
      }
  
      // Calcula a idade considerando anos bissextos
      const idadeNoAno = ano - anoNascimento + (this.Bissexto ? 1 : 0);
  
      return idadeNoAno;
    }
  }
  
  // Exemplo de uso:
  const pessoa1 = new Pessoa("Alice", 25, "São Paulo");
  const pessoa2 = new Pessoa("Bob", 30, "Rio de Janeiro");
  
  // Teste do método calcularIdadeBissextos
  const anoTeste = 2024;
  console.log(`${pessoa1.nome} teria ${pessoa1.calcularIdadeBissextos(anoTeste)} anos em ${anoTeste}.`);
  console.log(`${pessoa2.nome} teria ${pessoa2.calcularIdadeBissextos(anoTeste)} anos em ${anoTeste}.`)

  console.log(pessoa1)
  console.log(pessoa2)

console.log ('--- EXERCICIO 2 ----')
console.log('')
  // Exercicio 2

  class Animal {
    #nome
    #tipo
    constructor(nome, tipo) {
        this.#nome = nome;
        this.#tipo = tipo;
    }
  
    getNome() {
        return this.#nome;
    }
  
    getTipo() {
        return this.#tipo;
    }
  }
  
  class Mamifero extends Animal {
    constructor(nome) {
        super(nome, 'Mamífero');
    }
  
    amamentar() {
        return `${this.getNome()} é um mamífero e pode amamentar seus filhotes.`;
    }
  }
  
  class Ave extends Animal {
    constructor(nome) {
        super(nome, 'Ave');
    }
  
    voar() {
        return `${this.getNome()} é uma ave e pode voar.`;
    }
  }
  
  // Testando as classes
  const cachorro = new Mamifero('Totó');
  console.log(cachorro.amamentar()); // Saída: Totó é um mamífero e pode amamentar seus filhotes.
  
  const papagaio = new Ave('Loro');
  console.log(papagaio.voar()); // Saída: Loro é uma ave e pode voar.


  console.log ('-------EXERCICIO 3-------')
  console.log('')
  
// EXERCICIO 3 - CARRO


  class Carro {
    constructor(modelo, ano) {
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = false;
    }

    ligar() {
        this.ligado = true;
    }

    desligar() {
        this.ligado = false;
    }

    acelerar() {
        if (this.ligado) {
            return "Vrummm!";
        } else {
            return "Você precisa ligar o carro primeiro!";
        }
    }

    frear() {
        if (this.ligado) {
            return "Screeech!";
        } else {
            return "Você precisa ligar o carro primeiro!";
        }
    }

    status() {
        return this.ligado ? "ligado" : "desligado";
    }
}

// Testando os métodos
let carro1 = new Carro("Modelo X", 2023);
console.log('Status do carro: ' + carro1.status());  // desligado
carro1.ligar();
console.log('Status do carro: ' + carro1.status());  // ligado
console.log(carro1.acelerar());  // Vrummm!
console.log(carro1.frear());  // Screeech!
carro1.desligar();
console.log('Status do carro: ' + carro1.status());  // desligado