// Importando as classes que você já criou
import EstacionamentoController from "./control/EstacionamentoController"; // Atualize conforme seu caminho
import { Estacionamento } from "./models/Estacionamento"; // Atualize conforme seu caminho
import { Tarifa } from "./models/Tarifa"; // Atualize conforme seu caminho

// Função de inicialização
function inicializarEstacionamento() {
  // Criando o estacionamento com a tarifa correta
  const tarifa = Tarifa.Carro; // Aqui estamos pegando o valor de 'Carro', que é 14
  const estacionamento = new Estacionamento(tarifa); // Passando a tarifa para o construtor
  const controller = new EstacionamentoController(estacionamento);

  // Chama os métodos de interação, por exemplo, registrar entrada
  controller.registrarEntrada(); // Exemplo de uso
}

// Inicializa o sistema
inicializarEstacionamento();
