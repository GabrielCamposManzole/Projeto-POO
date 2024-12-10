"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Veiculo {
    constructor(placa, modelo, cor, tipoVeiculo) {
        this.placa = placa;
        this.modelo = modelo;
        this.cor = cor;
        this.tipoVeiculo = tipoVeiculo; // Inicializado no construtor
    }
    getPlaca() {
        return this.placa;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    getCor() {
        return this.cor;
    }
    setCor(cor) {
        this.cor = cor;
    }
    getTipoVeiculo() {
        return this.tipoVeiculo;
    }
    setTipoVeiculo(tipoVeiculo) {
        this.tipoVeiculo = tipoVeiculo;
    }
}
exports.default = Veiculo;
