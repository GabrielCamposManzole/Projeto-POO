import Vaga from "./Vaga";

export default class Estacionamento {
  private vaga!: Vaga;
  private taxaPorHora!: number;
  private dataHoraChegada!: Date;
  private dataHoraSaida!: Date;

  public getVaga(): Vaga {
    return this.vaga;
  }

  public getTaxaPorHora(): number {
    const diferencaEmMilissegundos =
      this.dataHoraSaida.getTime() - this.dataHoraChegada.getTime();
    const diferencaEmHoras = diferencaEmMilissegundos / (1000 * 60 * 60);
    return this.taxaPorHora * diferencaEmHoras;
  }

  public getDataHoraChegada(): Date {
    return this.dataHoraChegada;
  }

  public setDataHoraChegada(dataHoraChegada: Date): void {
    this.dataHoraChegada = dataHoraChegada;
  }

  public getDataHoraSaida(): Date {
    return this.dataHoraSaida;
  }

  public setDataHoraSaida(dataHoraSaida: Date): void {
    this.dataHoraSaida = dataHoraSaida;
  }
}
