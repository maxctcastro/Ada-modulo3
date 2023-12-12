// **Exercício 1: Sistema de Reservas de Hotel**

// Desenvolva um sistema de reservas de hotel que inclua classes como `Hotel`, `Quarto`, `Hospede` e `Reserva`. Os quartos podem ser de diferentes tipos (simples, duplo, suíte) e o sistema deve permitir que os hóspedes façam reservas para determinadas datas.

// - **Classes:**

// 1. `Hotel`: Representa um hotel e possui uma lista de quartos.
// 2. `Quarto`: Representa um quarto no hotel, com atributos como número, tipo (simples, duplo, suíte) e status de disponibilidade.
// 3. `Hospede`: Representa um hóspede com informações pessoais.
// 4. `Reserva`: Representa uma reserva feita por um hóspede para um quarto em um determinado período.

// - **Requisitos:**

// 1. Cada quarto deve ter um número único e um tipo específico.
// 2. O sistema deve permitir que os hóspedes consultem a disponibilidade de quartos para um determinado período.
// 3. Reservas só podem ser feitas para quartos disponíveis.
// 4. Implementar métodos para exibir informações detalhadas sobre o hotel, quartos, hóspedes e reservas.

// **Exercício 1: Sistema de Reservas de Hotel**

console.clear()

class Hospede {
    constructor (nome, email){
        this.nome = nome
        this.email = email
    }
}

class Quarto {
    constructor (numero, tipo) {
        this.numero = numero
        this.tipo = tipo
        this.disponivel = true
    }
   
}
class Reserva {
    constructor (hospede, quarto, dataEntrada, DataSaida){
        this.hospede = hospede
        this.quarto = quarto
        this.dataEntrada = dataEntrada
        this.DataSaida = DataSaida
    }
   
}
class Hotel {
    constructor(nome) {
        this.nome = nome
        this.quartos = []
        this.reservas = []
        
    }
    adicionarQuarto (numero, tipo){
        const quarto = new Quarto (numero, tipo)
        this.quartos.push(quarto)
    }
    fazerReserva(hospede, numeroQuarto, dataInicio, dataFim) {
        const quarto = this.quartos.find(quarto => quarto.numero === numeroQuarto && quarto.disponivel);

        if (!quarto) {
            console.log(`Quarto ${numeroQuarto} não está disponível para reserva.`);
            return null;
        }

        const dataAtual = new Date();
        
        if (dataInicio < dataAtual || dataFim < dataAtual) {
            console.log("Não é possível fazer uma reserva para datas passadas.");
            return null;
        }

        const reserva = new Reserva(hospede, quarto, dataInicio, dataFim);
        quarto.disponivel = false;
        this.reservas.push(reserva);

        console.log(`Reserva feita para ${hospede.nome} no quarto ${quarto.numero}.`);
        return reserva;
    }
    exibirQuartosDisponiveis(){
        const quartosDisponiveis = this.quartos.filter(quarto => quarto.disponivel)
        console.log (`Quartos disponíveis no ${this.nome}`)
        quartosDisponiveis.forEach(quarto => {console.log (`Quarto: ${quarto.numero} - ${quarto.tipo}`)})
    }

}

// Exemplo de uso:
const hotel = new Hotel("Hotel ABC");

hotel.adicionarQuarto(101, "simples");
hotel.adicionarQuarto(102, "duplo");
hotel.adicionarQuarto(103, "suíte");

const hospede1 = new Hospede("João", "joao@email.com");
const hospede2 = new Hospede("Maria", "maria@email.com");

hotel.exibirQuartosDisponiveis();

hotel.fazerReserva(hospede1, 101, new Date(2023, 12, 15), new Date(2023, 12, 25));
hotel.fazerReserva(hospede2, 101, new Date(2023, 12, 15), new Date(2023, 12, 22));
hotel.fazerReserva(hospede2, 102, new Date(2023, 12, 15), new Date(2023, 12, 22));

hotel.exibirQuartosDisponiveis();


