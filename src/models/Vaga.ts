import Veiculo from "./Veiculo";
import { TipoVeiculo } from "./TipoVeiculo";

export class Vaga {
  private numero: number;
  private tipo: TipoVeiculo;
  private ocupada: boolean;
  private veiculo?: Veiculo;

  constructor(numero: number, tipo: TipoVeiculo) {
    this.numero = numero;
    this.tipo = tipo;
    this.ocupada = false;
  }

  ocuparVaga(veiculo: Veiculo): void {
    if (this.ocupada) {
      console.log(`Vaga ${this.numero} já está ocupada.`);
    } else {
      this.veiculo = veiculo;
      this.ocupada = true;
      console.log(`Veículo ${veiculo.getModelo()} estacionado na vaga ${this.numero}.`);
    }
  }

  liberarVaga(): void {
    if (!this.ocupada) {
      console.log(`Vaga ${this.numero} já está livre.`);
    } else {
      console.log(`Vaga ${this.numero} liberada.`);
      this.veiculo = undefined;
      this.ocupada = false;
    }
  }

  isOcupada(): boolean {
    return this.ocupada;
  }

  getNumero(): number {
    return this.numero;
  }

  getTipo(): TipoVeiculo {
    return this.tipo;
  }
}
