import  Veiculo  from "./Veiculo";
import { TipoVeiculo } from "./TipoVeiculo";
export default class Caminhao extends Veiculo {
  constructor(placa: string, modelo: string, cor: string) {
    super(placa, modelo, cor, TipoVeiculo.Caminhao);
  }

  // Método específico para Caminhão
  carregarCarga(): void {
    console.log(`${this.getModelo()} está carregando carga!`);
  }
}
