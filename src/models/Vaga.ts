export default class Vaga {
  private numero: number;
  private tipoVaga: string;
  private ocupada: boolean;

  constructor(numero: number, tipo: string, ocupada: boolean) {
    this.tipoVaga = tipo;
    this.numero = numero;
    this.ocupada = ocupada;
  }

  public getNumeroDaVaga(): number {
    return this.numero;
  }

  public setNumeroDaVaga(numero: number): void {
    this.numero = numero;
  }

  public getTipoDaVaga(): string {
    return this.tipoVaga;
  }

  public setTipoDaVaga(tipoVaga: string): void {
    this.tipoVaga = tipoVaga;
  }

  public getOcupada(): boolean {
    return this.ocupada;
  }

  public setOcupada(ocupada: boolean): void {
    this.ocupada = ocupada;
  }
}
