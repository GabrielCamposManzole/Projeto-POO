"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Estacionamento {
    getVaga() {
        return this.vaga;
    }
    getTaxaPorHora() {
        const diferencaEmMilissegundos = this.dataHoraSaida.getTime() - this.dataHoraChegada.getTime();
        const diferencaEmHoras = diferencaEmMilissegundos / (1000 * 60 * 60);
        return this.taxaPorHora * diferencaEmHoras;
    }
    getDataHoraChegada() {
        return this.dataHoraChegada;
    }
    setDataHoraChegada(dataHoraChegada) {
        this.dataHoraChegada = dataHoraChegada;
    }
    getDataHoraSaida() {
        return this.dataHoraSaida;
    }
    setDataHoraSaida(dataHoraSaida) {
        this.dataHoraSaida = dataHoraSaida;
    }
}
exports.default = Estacionamento;
