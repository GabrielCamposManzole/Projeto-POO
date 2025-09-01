"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarifa = void 0;
exports.calcularValor = calcularValor;
// Definindo o enum corretamente
var Tarifa;
(function (Tarifa) {
    Tarifa[Tarifa["Carro"] = 14] = "Carro";
    Tarifa[Tarifa["Moto"] = 7] = "Moto";
    Tarifa[Tarifa["Caminhao"] = 24] = "Caminhao";
})(Tarifa || (exports.Tarifa = Tarifa = {}));
// Função para calcular o valor com base na tarifa
function calcularValor(tarifa, tempoEstacionado) {
    switch (tarifa) {
        case Tarifa.Moto:
            return Tarifa.Moto * tempoEstacionado; // Usando o valor da tarifa e multiplicando pelo tempo
        case Tarifa.Carro:
            return Tarifa.Carro * tempoEstacionado; // Usando o valor da tarifa e multiplicando pelo tempo
        case Tarifa.Caminhao:
            return Tarifa.Caminhao * tempoEstacionado; // Usando o valor da tarifa e multiplicando pelo tempo
        default:
            throw new Error('Tarifa inválida');
    }
}
