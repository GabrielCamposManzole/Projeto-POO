import { Vaga } from "./Vaga";
import { Tarifa } from "./Tarifa";
import { TipoVeiculo } from "./TipoVeiculo";
import Veiculo from "./Veiculo";

export class Estacionamento {
  private tarifa: Tarifa;
  private vagas: Vaga[];
  private historico: Map<Veiculo, { entrada: Date; vaga: Vaga }>;

  constructor(tarifa: Tarifa) {
    this.tarifa = tarifa;  // Agora a tarifa é recebida no construtor
    this.vagas = [];
    this.historico = new Map();
  }

  adicionarVaga(vaga: Vaga): void {
    this.vagas.push(vaga);
  }

  estacionarVeiculo(veiculo: Veiculo): boolean {
    const vagaDisponivel = this.vagas.find((vaga) => !vaga.isOcupada());

    if (!vagaDisponivel) {
      console.log("Nenhuma vaga disponível!");
      return false;
    }

    vagaDisponivel.ocuparVaga(veiculo);
    this.historico.set(veiculo, { entrada: new Date(), vaga: vagaDisponivel });

    return true;
  }

  removerVeiculo(veiculo: Veiculo): void {
    const registro = this.historico.get(veiculo);

    if (!registro) {
      console.log("Veículo não encontrado no estacionamento.");
      return;
    }

    const { entrada, vaga } = registro;
    const tempoEstacionado =
      (new Date().getTime() - entrada.getTime()) / 3600000; // Convertendo ms para horas

    let valor: number;
    switch (veiculo.getTipoVeiculo()) {
      case TipoVeiculo.Moto:
        valor = Tarifa.Moto * tempoEstacionado;
        break;
      case TipoVeiculo.Carro:
        valor = Tarifa.Carro * tempoEstacionado;
        break;
      case TipoVeiculo.Caminhao:
        valor = Tarifa.Caminhao * tempoEstacionado;
        break;
      default:
        console.log("Tipo de veículo não reconhecido.");
        return;
    }

    console.log(
      `Veículo removido. Tempo: ${tempoEstacionado.toFixed(
        2
      )}h. Valor a pagar: R$ ${valor.toFixed(2)}.`
    );

    vaga.liberarVaga();
    this.historico.delete(veiculo);
  }
}
