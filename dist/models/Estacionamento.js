"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estacionamento = void 0;
const Tarifa_1 = require("./Tarifa");
const TipoVeiculo_1 = require("./TipoVeiculo");
class Estacionamento {
    constructor(tarifa) {
        this.tarifa = tarifa;
        this.vagas = [];
        this.historico = new Map();
    }
    adicionarVaga(vaga) {
        this.vagas.push(vaga);
    }
    estacionarVeiculo(veiculo) {
        const vagaDisponivel = this.vagas.find((vaga) => !vaga.isOcupada());
        if (!vagaDisponivel) {
            console.log("Nenhuma vaga disponível!");
            return false;
        }
        vagaDisponivel.ocuparVaga(veiculo);
        this.historico.set(veiculo, { entrada: new Date(), vaga: vagaDisponivel });
        return true;
    }
    removerVeiculo(veiculo) {
        const registro = this.historico.get(veiculo);
        if (!registro) {
            console.log("Veículo não encontrado no estacionamento.");
            return;
        }
        const { entrada, vaga } = registro;
        const tempoEstacionado = (new Date().getTime() - entrada.getTime()) / 3600000; // Convertendo ms para horas
        let valor;
        switch (veiculo.getTipoVeiculo()) {
            case TipoVeiculo_1.TipoVeiculo.Moto:
                valor = Tarifa_1.Tarifa.Moto * tempoEstacionado;
                break;
            case TipoVeiculo_1.TipoVeiculo.Carro:
                valor = Tarifa_1.Tarifa.Carro * tempoEstacionado;
                break;
            case TipoVeiculo_1.TipoVeiculo.Caminhao:
                valor = Tarifa_1.Tarifa.Caminhao * tempoEstacionado;
                break;
            default:
                console.log("Tipo de veículo não reconhecido.");
                return;
        }
        console.log(`Veículo removido. Tempo: ${tempoEstacionado.toFixed(2)}h. Valor a pagar: R$ ${valor.toFixed(2)}.`);
        vaga.liberarVaga();
        this.historico.delete(veiculo);
    }
}
exports.Estacionamento = Estacionamento;
