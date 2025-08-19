import Veiculo from "./Veiculo";
import { TipoVeiculo } from "./TipoVeiculo";

export default class  Moto extends Veiculo {
  constructor(placa: string, modelo: string, cor: string) {
    super(placa, modelo, cor, TipoVeiculo.Moto);
  }

  // Método específico para Moto
  empinar(): void {
    console.log(`${this.getModelo()} está empinando!`);
  }
}
