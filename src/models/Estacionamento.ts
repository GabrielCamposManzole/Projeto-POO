import Vaga from "./Vaga";

export default class Estacionamento {
  private vagas!: Vaga;
  private taxaPorHora!: number;
  private dataHoraChegada!: Date;
  private dataHoraSaida!: Date;

  public getTaxaPorHora(): number {
    const diferencaEmMilissegundos = this.dataHoraSaida.getTime() - this.dataHoraChegada.getTime();
    const diferencaEmHoras = diferencaEmMilissegundos / (1000 * 60 * 60);
    return this.taxaPorHora * diferencaEmHoras;
  }

public getDataHoraChegada(): Date {
  return this.dataHoraChegada
}


public getDataHoraSaida(): Date {
  return this.dataHoraSaida
}

}