import { TipoVeiculo } from './TipoVeiculo'; // Atualize o caminho conforme necessário

export default class Veiculo {
  private readonly placa: string;
  private modelo: string;
  private cor: string;
  private tipoVeiculo: TipoVeiculo; 

  constructor(placa: string, modelo: string, cor: string, tipoVeiculo: TipoVeiculo) {
    this.placa = placa;
    this.modelo = modelo;
    this.cor = cor;
    this.tipoVeiculo = tipoVeiculo; 
  }

  public getPlaca(): string {
    return this.placa;
  }

  public getModelo(): string {
    return this.modelo;
  }

  public setModelo(modelo: string): void {
    this.modelo = modelo;
  }

  public getCor(): string {
    return this.cor;
  }

  public setCor(cor: string): void {
    this.cor = cor;
  }

  public getTipoVeiculo(): TipoVeiculo {
    return this.tipoVeiculo;
  }

  public setTipoVeiculo(tipoVeiculo: TipoVeiculo): void {
    this.tipoVeiculo = tipoVeiculo;
  }
}
