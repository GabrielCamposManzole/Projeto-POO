// Definindo o enum corretamente
export enum Tarifa {
  Carro = 14,
  Moto = 7,
  Caminhao = 24
}

// Função para calcular o valor com base na tarifa
export function calcularValor(tarifa: Tarifa, tempoEstacionado: number): number {
  switch (tarifa) {
    case Tarifa.Moto:
      return Tarifa.Moto * tempoEstacionado;  // Usando o valor da tarifa e multiplicando pelo tempo
    case Tarifa.Carro:
      return Tarifa.Carro * tempoEstacionado;  // Usando o valor da tarifa e multiplicando pelo tempo
    case Tarifa.Caminhao:
      return Tarifa.Caminhao * tempoEstacionado;  // Usando o valor da tarifa e multiplicando pelo tempo
    default:
      throw new Error('Tarifa inválida');
  }
}