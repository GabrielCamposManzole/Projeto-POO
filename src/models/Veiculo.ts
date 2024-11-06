import TipoVeiculo from "./TipoVeiculo";

export default class Veiculo {
  private placa: string;
  private modelo: string;
  private tipo: TipoVeiculo;

  constructor(placa: string, modelo: string, tipo: TipoVeiculo) {
    this.placa = placa;
    this.modelo = modelo;
    this.tipo = tipo;
  }
}
