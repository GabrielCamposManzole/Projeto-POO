import prompt from 'prompt-sync';
import ClienteAvulso from './models/ClienteAvulso';


const promptSync = prompt();

// Função para criar um novo cliente avulso com dados fornecidos pelo usuário
function criarClienteAvulso() {
  const nome = promptSync('Digite o nome do cliente: ');
  const cpf = promptSync('Digite o CPF do cliente: ');
  const telefone = parseInt(promptSync('Digite o telefone do cliente: '));
  const ultimaCompra = new Date(promptSync('Digite a data da última compra (YYYY-MM-DD): '));

  const novoCliente = new ClienteAvulso(nome, cpf, telefone, ultimaCompra);
  return novoCliente;
}

// Exemplo de uso
const cliente = criarClienteAvulso();
console.log(cliente);