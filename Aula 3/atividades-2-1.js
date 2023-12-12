// # Exercício 1: Sistema Bancário

// Cenário:

// Desenvolva um sistema bancário simples que contenha as classes Conta e Cliente. A classe Conta deve ter métodos para depósito, saque e consulta de saldo. A classe Cliente deve ter atributos como nome, idade, e um array de contas.

// Requisitos:

// - Utilize encapsulamento para proteger o saldo da conta.
// - Implemente herança para criar diferentes tipos de contas, como ContaCorrente e ContaPoupanca.
// - Garanta que o saque não seja permitido caso ultrapasse o limite da conta corrente.
console.clear()


class Conta {
    #numero
    #saldo
    constructor(numero, saldo = 0) {
        this.#numero = numero
        this.#saldo = saldo
    }
    get numero() {
        return this.#numero
    }

    get saldo() {
        return this.#saldo
    }


    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor
            console.log(`Deposito de ${valor} foi realizado. Novo saldo: R$${this.#saldo}`)
        } else {
            console.log('O valor do deposito deve ser maior que zero')
        }
    }

    sacar(valor) {
        if (valor <= this.#saldo && valor > 0) {
            this.#saldo -= valor
            console.log(`Saque de ${valor} foi realizado. Novo saldo: R$${this.#saldo}`)
        } else {
            console.log('Saldo insuficiente ou valor de saque inválido')
        }
    }

    consultarSaldo() {
        console.log(`O salda da conta ${this.#numero} é: R$${this.#saldo}`)
    }
}

class Cliente {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
        this.contas = []
    }
    adicionarConta(conta) {
        this.contas.push(conta)
        console.log(`${conta.tipo} adicionada para o cliente ${this.nome}`)
    }
}

class ContaCorrente extends Conta {
    #limite;

    constructor(numero, saldo = 0, limite = 500) {
        super(numero, saldo);
        this.#limite = limite;
    }
    get tipo() {
        return 'Conta Corrente 1';
    }

    get limite() {
        return this.#limite;
    }

    sacar(valor) {
        const limiteDisponivel = super.saldo + this.#limite;
        if (valor > 0 && valor <= limiteDisponivel) {
            super.sacar(valor);
               } else {
            console.log('Saldo insuficiente ou valor de saque inválido.');
        }
    }
}


class ContaPoupanca extends Conta {
     get tipo() {
        return 'Conta Poupança 1';
    }
}


// Exemplo de uso:
// Criando instância do cliente
const cliente1 = new Cliente('João', 30);
// Criando instância da conta
const contaCorrente1 = new ContaCorrente(1, 1000);
const contaPoupanca1 = new ContaPoupanca(2, 500);

// Adicionando contas 1 e 2 para o cliente 1
cliente1.adicionarConta(contaCorrente1);
cliente1.adicionarConta(contaPoupanca1);
// Utilizando os metodos da classe conta  para a conta corrente 1
contaCorrente1.depositar(500);
contaCorrente1.consultarSaldo();
console.log ('------------------------')
contaCorrente1.sacar(700); // Tentando sacar mais que o limite
contaCorrente1.sacar(200);
contaCorrente1.consultarSaldo();
console.log ('------------------------')
contaPoupanca1.depositar(1000);
contaPoupanca1.sacar(700);
contaPoupanca1.consultarSaldo();





