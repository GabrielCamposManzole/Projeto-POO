"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const ClienteAvulso_1 = __importDefault(require("./models/ClienteAvulso"));
const promptSync = (0, prompt_sync_1.default)();
// Função para criar um novo cliente avulso com dados fornecidos pelo usuário
function criarClienteAvulso() {
    const nome = promptSync('Digite o nome do cliente: ');
    const cpf = promptSync('Digite o CPF do cliente: ');
    const telefone = parseInt(promptSync('Digite o telefone do cliente: '));
    const ultimaCompra = new Date(promptSync('Digite a data da última compra (YYYY-MM-DD): '));
    const novoCliente = new ClienteAvulso_1.default(nome, cpf, telefone, ultimaCompra);
    return novoCliente;
}
/* // Exemplo de uso
const cliente = criarClienteAvulso();
console.log(cliente); */ 
