"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vaga {
    constructor(numero, tipo, ocupada) {
        this.tipoVaga = tipo;
        this.numero = numero;
        this.ocupada = ocupada;
    }
    getNumeroDaVaga() {
        return this.numero;
    }
    setNumeroDaVaga(numero) {
        this.numero = numero;
    }
    getTipoDaVaga() {
        return this.tipoVaga;
    }
    setTipoDaVaga(tipoVaga) {
        this.tipoVaga = tipoVaga;
    }
    getOcupada() {
        return this.ocupada;
    }
    setOcupada(ocupada) {
        this.ocupada = ocupada;
    }
}
exports.default = Vaga;
