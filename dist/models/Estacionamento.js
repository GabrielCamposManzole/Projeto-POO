"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Estacionamento {
    constructor(vagas) {
        this.vagas = [];
        this.clientes = new Map(); // Map para buscar clientes por placa
        this.vagas = vagas;
    }
    estacionar(veiculo, cliente) {
        // Encontrar uma vaga disponível do tipo adequado
        const vagaDisponivel = this.vagas.find((vaga) => vaga.tipo === veiculo.tipo);
        if (!vagaDisponivel) {
            return false;
        }
        // Associar o veículo à vaga e o cliente ao estacionamento
        this.clientes.set(veiculo.placa, cliente);
        // ... outras lógicas ...
        return true;
    }
    retirar(placa) {
        // ... lógica para retirar o veículo e liberar a vaga ...
        return true;
    }
    calcularTarifa(cliente) {
        // Lógica para calcular a tarifa com base no tipo de cliente e tempo de permanência
        if (cliente instanceof ClienteMensalista) {
            // ... calcular tarifa mensal ...
        }
        else if (cliente instanceof ClienteAvulso) {
            // ... calcular tarifa horária ...
        }
        return 0;
    }
}
exports.default = Estacionamento;
