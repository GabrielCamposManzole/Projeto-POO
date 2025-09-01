"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstacionamentoController = void 0;
const Carro_1 = __importDefault(require("../models/Carro"));
const Moto_1 = __importDefault(require("../models/Moto"));
const Caminhao_1 = __importDefault(require("../models/Caminhao"));
const ClienteAvulso_1 = __importDefault(require("../models/ClienteAvulso"));
const ClienteMensalista_1 = __importDefault(require("../models/ClienteMensalista"));
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const promptSync = (0, prompt_sync_1.default)();
class EstacionamentoController {
    constructor(estacionamento) {
        this.estacionamento = estacionamento;
    }
    /**
     * Registra um veículo, perguntando os dados ao usuário.
     * @returns Veiculo
     */
    registrarVeiculo() {
        const placa = promptSync("Digite a placa do veículo: ").toUpperCase();
        const modelo = promptSync("Digite o modelo do veículo: ");
        const cor = promptSync("Digite a cor do veículo: ");
        console.log("\nSelecione o tipo de veículo:");
        console.log("1 - Carro");
        console.log("2 - Moto");
        console.log("3 - Caminhão");
        let opcao;
        do {
            opcao = parseInt(promptSync("Escolha uma opção: "), 10);
            if (![1, 2, 3].includes(opcao)) {
                console.log("Opção inválida! Escolha 1, 2 ou 3.");
            }
        } while (![1, 2, 3].includes(opcao));
        let veiculo; // Declara a variável sem inicializar
        switch (opcao) {
            case 1:
                veiculo = new Carro_1.default(placa, modelo, cor);
                break;
            case 2:
                veiculo = new Moto_1.default(placa, modelo, cor);
                break;
            case 3:
                veiculo = new Caminhao_1.default(placa, modelo, cor);
                break;
            default:
                throw new Error("Erro inesperado ao selecionar o tipo de veículo.");
        }
        return veiculo;
    }
    /**
     * Registra a entrada de um cliente e do seu veículo no estacionamento.
     * @returns Objeto com Cliente e Veiculo
     */
    registrarEntrada() {
        console.log("\n*** Registro de Entrada no Estacionamento ***");
        // Criar o cliente
        const cliente = this.criarCliente();
        // Registrar o veículo
        const veiculo = this.registrarVeiculo();
        console.log("\nCliente e veículo registrados com sucesso!");
        console.log(`Cliente: ${cliente.getNome()}, CPF: ${cliente.getCpf()}, Telefone: ${cliente.getTelefone()}`);
        if (cliente instanceof ClienteMensalista_1.default) {
            console.log(`Mensalidade: R$ ${cliente.getMensalidade().toFixed(2)}`);
        }
        console.log(`Veículo: Placa ${veiculo.getPlaca()}, Modelo ${veiculo.getModelo()}, Cor ${veiculo.getCor()}, Tipo ${veiculo.getTipoVeiculo()}`);
        // Estacionar o veículo em uma vaga disponível
        const sucesso = this.estacionamento.estacionarVeiculo(veiculo);
        if (sucesso) {
            console.log("\nVeículo estacionado com sucesso!");
        }
        else {
            console.log("\nNão há vagas disponíveis!");
        }
        return { cliente, veiculo };
    }
    /**
     * Cria um cliente perguntando os dados ao usuário.
     * @returns Cliente (Avulso ou Mensalista)
     */
    criarCliente() {
        const nome = promptSync("Digite o nome do cliente: ");
        const cpf = promptSync("Digite o CPF do cliente: ");
        let telefone;
        do {
            telefone = parseInt(promptSync("Digite o telefone do cliente: "), 10);
            if (isNaN(telefone))
                console.log("Número inválido! Tente novamente.");
        } while (isNaN(telefone));
        console.log("\nO cliente é mensalista?");
        console.log("1 - Sim");
        console.log("2 - Não");
        let opcao;
        do {
            opcao = parseInt(promptSync("Escolha uma opção: "), 10);
            if (![1, 2].includes(opcao))
                console.log("Opção inválida! Tente novamente.");
        } while (![1, 2].includes(opcao));
        if (opcao === 1) {
            let mensalidade;
            do {
                mensalidade = parseFloat(promptSync("Digite o valor da mensalidade: "));
                if (isNaN(mensalidade))
                    console.log("Valor inválido! Tente novamente.");
            } while (isNaN(mensalidade));
            return new ClienteMensalista_1.default(nome, cpf, telefone, mensalidade);
        }
        else {
            return new ClienteAvulso_1.default(nome, cpf, telefone, new Date());
        }
    }
}
exports.EstacionamentoController = EstacionamentoController;
