import prompt from 'prompt-sync';
import ClienteAvulso from '../models/ClienteAvulso';
import ClienteMensalista from '../models/ClienteMensalista';
import { TipoVeiculo } from '../models/TipoVeiculo';
import Veiculo from '../models/Veiculo';

const promptSync = prompt();

// Função para validar o CPF
function validarCPF(cpf: string): boolean {
  cpf = cpf.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false; // CPF com todos os dígitos iguais

  let soma = 0;
  let resto;
  for (let i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto >= 10) resto = 0;
  if (resto !== parseInt(cpf.substring(9, 10))) return false;

  soma = 0;
  for (let i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;
  if (resto >= 10) resto = 0;
  if (resto !== parseInt(cpf.substring(10, 11))) return false;

  return true;
}

// Função para criar um cliente
function criarCliente(): ClienteAvulso | ClienteMensalista {
  let nome: string;
  let cpf: string;
  let telefone: number;
  let dataDeCadastro: Date = new Date(); // Inicializando a data de cadastro com a data atual

  do {
    nome = promptSync('Digite o nome do cliente: ');
  } while (!nome);

  do {
    cpf = promptSync('Digite o CPF do cliente: ');
    if (!validarCPF(cpf)) console.log('CPF inválido! Tente novamente.');
  } while (!validarCPF(cpf));

  do {
    telefone = parseInt(promptSync('Digite o telefone do cliente (apenas números): '));
    if (isNaN(telefone)) console.log('Telefone inválido! Tente novamente.');
  } while (isNaN(telefone));

  console.log('Escolha o tipo de cliente:');
  console.log('1 - Cliente Avulso');
  console.log('2 - Cliente Mensalista');

  let tipoCliente: ClienteAvulso | ClienteMensalista;
  const opcaoCliente = parseInt(promptSync('Escolha uma opção: '));

  if (opcaoCliente === 1) {
    // Cliente Avulso
    tipoCliente = new ClienteAvulso(nome, cpf, telefone, dataDeCadastro);
  } else if (opcaoCliente === 2) {
    // Cliente Mensalista
    const mensalidade = parseFloat(promptSync('Digite o valor da mensalidade: '));
    tipoCliente = new ClienteMensalista(nome, cpf, telefone, mensalidade);
  } else {
    console.log('Opção inválida! Cliente definido como Avulso.');
    tipoCliente = new ClienteAvulso(nome, cpf, telefone, dataDeCadastro);
  }

  return tipoCliente;
}

// Função para registrar o veículo do cliente
function registrarVeiculo(): Veiculo {
  const placa = promptSync('Digite a placa do veículo: ').toUpperCase();
  const modelo = promptSync('Digite o modelo do veículo: ');
  const cor = promptSync('Digite a cor do veículo: ');

  console.log('Selecione o tipo de veículo:');
  console.log('1 - Carro');
  console.log('2 - Moto');
  console.log('3 - Caminhão');

  let tipoVeiculo: TipoVeiculo;
  const opcaoTipo = parseInt(promptSync('Escolha uma opção: '));

  switch (opcaoTipo) {
    case 1:
      tipoVeiculo = TipoVeiculo.Carro;
      break;
    case 2:
      tipoVeiculo = TipoVeiculo.Moto;
      break;
    case 3:
      tipoVeiculo = TipoVeiculo.Caminhao;
      break;
    default:
      console.log('Opção inválida! Tipo definido como "Carro".');
      tipoVeiculo = TipoVeiculo.Carro;
  }

  const veiculo = new Veiculo(placa, modelo, cor, tipoVeiculo);
  return veiculo;
}

// Função principal para registrar a entrada do cliente e veículo
function registrarEntrada(): { cliente: ClienteAvulso | ClienteMensalista; veiculo: Veiculo } {
  console.log('*** Registro de Entrada no Estacionamento ***');
  
  const cliente = criarCliente();
  const veiculo = registrarVeiculo();

  console.log('\nCliente e veículo registrados com sucesso!');
  console.log(`Cliente: ${cliente.getNome()}, CPF: ${cliente.getCpf()}, Telefone: ${cliente.getTelefone()}`);
  if (cliente instanceof ClienteMensalista) {
    console.log(`Mensalidade: R$ ${cliente.getMensalidade().toFixed(2)}`);
  }

  console.log(`Veículo: Placa ${veiculo.getPlaca()}, Modelo ${veiculo.getModelo()}, Cor ${veiculo.getCor()}, Tipo ${veiculo.getTipoVeiculo()}`);

  return { cliente, veiculo };
}

// Exemplo de uso
const registro = registrarEntrada();
console.log('\nRegistro completo:', registro);
