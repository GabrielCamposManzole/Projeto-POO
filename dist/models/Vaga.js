"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vaga = void 0;
class Vaga {
    constructor(numero, tipo) {
        this.numero = numero;
        this.tipo = tipo;
        this.ocupada = false;
    }
    ocuparVaga(veiculo) {
        if (this.ocupada) {
            console.log(`Vaga ${this.numero} já está ocupada.`);
        }
        else {
            this.veiculo = veiculo;
            this.ocupada = true;
            console.log(`Veículo ${veiculo.getModelo()} estacionado na vaga ${this.numero}.`);
        }
    }
    liberarVaga() {
        if (!this.ocupada) {
            console.log(`Vaga ${this.numero} já está livre.`);
        }
        else {
            console.log(`Vaga ${this.numero} liberada.`);
            this.veiculo = undefined;
            this.ocupada = false;
        }
    }
    isOcupada() {
        return this.ocupada;
    }
    getNumero() {
        return this.numero;
    }
    getTipo() {
        return this.tipo;
    }
}
exports.Vaga = Vaga;
