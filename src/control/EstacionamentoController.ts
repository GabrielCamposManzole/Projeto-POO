import { Estacionamento } from "../models/Estacionamento";
import Veiculo from "../models/Veiculo";
import Carro from "../models/Carro";
import  Moto from "../models/Moto";
import Caminhao from "../models/Caminhao";
import Cliente from "../models/Cliente";
import ClienteAvulso from "../models/ClienteAvulso";
import ClienteMensalista from "../models/ClienteMensalista";
import prompt from "prompt-sync";

const promptSync = prompt();

export default class EstacionamentoController {
  constructor(private estacionamento: Estacionamento) {}

  /**
   * Registra um veículo, perguntando os dados ao usuário.
   * @returns Veiculo
   */
  registrarVeiculo(): Veiculo {
    const placa = promptSync("Digite a placa do veículo: ").toUpperCase();
    const modelo = promptSync("Digite o modelo do veículo: ");
    const cor = promptSync("Digite a cor do veículo: ");
  
    console.log("\nSelecione o tipo de veículo:");
    console.log("1 - Carro");
    console.log("2 - Moto");
    console.log("3 - Caminhão");
  
    let opcao: number;
    do {
      opcao = parseInt(promptSync("Escolha uma opção: "), 10);
      if (![1, 2, 3].includes(opcao)) {
        console.log("Opção inválida! Escolha 1, 2 ou 3.");
      }
    } while (![1, 2, 3].includes(opcao));
  
    let veiculo: Veiculo; // Declara a variável sem inicializar
  
    switch (opcao) {
      case 1:
        veiculo = new Carro(placa, modelo, cor);
        break;
      case 2:
        veiculo = new Moto(placa, modelo, cor);
        break;
      case 3:
        veiculo = new Caminhao(placa, modelo, cor);
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
  registrarEntrada(): { cliente: Cliente; veiculo: Veiculo } {
    console.log("\n*** Registro de Entrada no Estacionamento ***");

    // Criar o cliente
    const cliente = this.criarCliente();

    // Registrar o veículo
    const veiculo = this.registrarVeiculo();

    console.log("\nCliente e veículo registrados com sucesso!");
    console.log(
      `Cliente: ${cliente.getNome()}, CPF: ${cliente.getCpf()}, Telefone: ${cliente.getTelefone()}`
    );

    if (cliente instanceof ClienteMensalista) {
      console.log(`Mensalidade: R$ ${cliente.getMensalidade().toFixed(2)}`);
    }

    console.log(
      `Veículo: Placa ${veiculo.getPlaca()}, Modelo ${veiculo.getModelo()}, Cor ${veiculo.getCor()}, Tipo ${veiculo.getTipoVeiculo()}`
    );

    // Estacionar o veículo em uma vaga disponível
    const sucesso = this.estacionamento.estacionarVeiculo(veiculo);
    if (sucesso) {
      console.log("\nVeículo estacionado com sucesso!");
    } else {
      console.log("\nNão há vagas disponíveis!");
    }

    return { cliente, veiculo };
  }

  /**
   * Cria um cliente perguntando os dados ao usuário.
   * @returns Cliente (Avulso ou Mensalista)
   */
  private criarCliente(): Cliente {
    const nome = promptSync("Digite o nome do cliente: ");
    const cpf = promptSync("Digite o CPF do cliente: ");

    let telefone: number;
    do {
      telefone = parseInt(promptSync("Digite o telefone do cliente: "), 10);
      if (isNaN(telefone)) console.log("Número inválido! Tente novamente.");
    } while (isNaN(telefone));

    console.log("\nO cliente é mensalista?");
    console.log("1 - Sim");
    console.log("2 - Não");

    let opcao: number;
    do {
      opcao = parseInt(promptSync("Escolha uma opção: "), 10);
      if (![1, 2].includes(opcao))
        console.log("Opção inválida! Tente novamente.");
    } while (![1, 2].includes(opcao));

    if (opcao === 1) {
      let mensalidade: number;
      do {
        mensalidade = parseFloat(promptSync("Digite o valor da mensalidade: "));
        if (isNaN(mensalidade)) console.log("Valor inválido! Tente novamente.");
      } while (isNaN(mensalidade));

      return new ClienteMensalista(nome, cpf, telefone, mensalidade);
    } else {
      return new ClienteAvulso(nome, cpf, telefone, new Date());
    }
  }
}
