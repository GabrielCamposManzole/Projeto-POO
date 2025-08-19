"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importando as classes que você já criou
const EstacionamentoController_1 = __importDefault(require("./control/EstacionamentoController")); // Atualize conforme seu caminho
const Estacionamento_1 = require("./models/Estacionamento"); // Atualize conforme seu caminho
const Tarifa_1 = require("./models/Tarifa"); // Atualize conforme seu caminho
// Função de inicialização
function inicializarEstacionamento() {
    // Criando o estacionamento com a tarifa correta
    const tarifa = Tarifa_1.Tarifa.Carro; // Aqui estamos pegando o valor de 'Carro', que é 14
    const estacionamento = new Estacionamento_1.Estacionamento(tarifa); // Passando a tarifa para o construtor
    const controller = new EstacionamentoController_1.default(estacionamento);
    // Chama os métodos de interação, por exemplo, registrar entrada
    controller.registrarEntrada(); // Exemplo de uso
}
// Inicializa o sistema
inicializarEstacionamento();
