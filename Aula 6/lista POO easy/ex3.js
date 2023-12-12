// **Exercício 3: Sistema de Locação de Carros**

// Desenvolva um sistema de locação de carros com classes como `Carro`, `Cliente`, `Locacao` e `AgenciaLocadora`. Os carros podem ser de diferentes modelos e o sistema deve rastrear as locações.

// - **Classes:**

// 1. `Carro`: Representa um carro com informações como modelo, placa e disponibilidade.
// 2. `Cliente`: Representa um cliente que pode alugar um carro.
// 3. `Locacao`: Representa uma locação de um carro por um cliente.
// 4. `AgenciaLocadora`: Representa a agência de locação e possui uma lista de carros disponíveis.

// - **Requisitos:**

// 1. O sistema deve permitir que os clientes verifiquem a disponibilidade de carros.
// 2. Locações só podem ser feitas para carros disponíveis.
// 3. Implementar métodos para calcular o valor da locação com base no modelo do carro e no período.

class Carro {
    constructor(modelo, placa) {
        this.modelo = modelo;
        this.placa = placa;
        this.disponivel = true;
    }
}

class Cliente {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}

class Locacao {
    constructor(cliente, carro, dataEntrada, dataSaida) {
        this.cliente = cliente;
        this.carro = carro;
        this.dataEntrada = dataEntrada;
        this.dataSaida = dataSaida;
    }

    calcularValor() {
        const diasAlugados = Math.ceil((this.dataSaida - this.dataEntrada) / (1000 * 60 * 60 * 24));
        const valorDiaria = 50; // Valor fictício, ajuste conforme necessário.
        return diasAlugados * valorDiaria;
    }
}

class AgenciaLocadora {
    constructor(nome) {
        this.nome = nome;
        this.carros = [];
        this.locacoes = [];
    }

    adicionarCarro(modelo, placa) {
        const carro = new Carro(modelo, placa);
        this.carros.push(carro);
    }

    fazerLocacao(cliente, placaCarro, dataEntrada, dataSaida) {
        const carro = this.carros.find(carro => carro.placa === placaCarro && carro.disponivel);

        if (!carro) {
            console.log(`O carro com placa ${placaCarro} não está disponível!`);
            return null;
        }
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0); // Zera as horas para garantir uma comparação de data.

        if (dataEntrada < hoje) {
            console.log("A data de entrada deve ser maior ou igual ao dia atual.");
            return null;
        }

        if (dataEntrada >= dataSaida) {
            console.log("A data de entrada deve ser anterior à data de saída.");
            return null;
        }

        const locacaoExistente = this.locacoes.find(locacao => {
            return (
                locacao.carro.placa === placaCarro &&
                ((dataEntrada >= locacao.dataEntrada && dataEntrada <= locacao.dataSaida) ||
                    (dataSaida >= locacao.dataEntrada && dataSaida <= locacao.dataSaida))
            );
        });

        if (locacaoExistente) {
            console.log(`O carro com placa ${placaCarro} já está alugado nesse período.`);
            return null;
        }
        const locacao = new Locacao(cliente, carro, dataEntrada, dataSaida);
        carro.disponivel = false;
        this.locacoes.push(locacao);

        console.log(`Locação do carro modelo ${carro.modelo} feita para ${cliente.nome}.`);
        console.log(`Valor da locação: R$ ${locacao.calcularValor().toFixed(2)}.`);

        return locacao;
    }

    exibirCarrosDisponiveis() {
        const carrosDisponiveis = this.carros.filter(carro => carro.disponivel);
        console.log(`Carros disponíveis na ${this.nome}`);
        carrosDisponiveis.forEach(carro => {
            console.log(`Carro: ${carro.modelo} - ${carro.placa}`);
        });
    }
}

// Exemplo de uso:
const agenciaLocadora = new AgenciaLocadora("LocaBrasil");

agenciaLocadora.adicionarCarro('Gol', "pkf-3456");
agenciaLocadora.adicionarCarro('Palio', "pkf-3586");
agenciaLocadora.adicionarCarro('Punto', "pgf-3478");
agenciaLocadora.adicionarCarro('Celta', "kjf-3533");
agenciaLocadora.adicionarCarro('Ford ka', "pki-3148");

const cliente1 = new Cliente("João", "joao@email.com");
const cliente2 = new Cliente("Maria", "maria@email.com");
const cliente3 = new Cliente("Pedro", "pedro@email.com");

agenciaLocadora.exibirCarrosDisponiveis();

agenciaLocadora.fazerLocacao(cliente1, "pkf-3586", new Date(2023, 11, 14), new Date(2023, 11, 22));
agenciaLocadora.fazerLocacao(cliente2, "pkf-3456", new Date(2023, 11, 15), new Date(2023, 11, 27));
agenciaLocadora.fazerLocacao(cliente2, "pgf-3478", new Date(2023, 11, 15), new Date(2023, 11, 22));
agenciaLocadora.fazerLocacao(cliente3, "pkf-3456", new Date(2023, 11, 15), new Date(2023, 11, 22));