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

  public getModelo(): string {
    return this.modelo;
  }

  public setModelo(modelo: string): void {
    this.modelo = modelo;
  }

  public getPlaca(): string {
    return this.placa;
  }

  public setPlava(placa: string): void {
    this.placa = placa;
  }

  public retornaTipo(): TipoVeiculo {
    return this.tipo;
  }

}
