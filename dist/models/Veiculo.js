"use strict";
//import  TipoVeiculo  from './TipoVeiculo';
Object.defineProperty(exports, "__esModule", { value: true });
class Veiculo {
    constructor(placa, modelo, cor) {
        this.placa = placa;
        this.modelo = modelo;
        this.cor = cor;
    }
    getPlaca() {
        return this.placa;
    }
    setPlaca(placa) {
        this.placa = placa;
    }
    getModelo() {
        return this.modelo;
    }
    setMOdelo(modelo) {
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
