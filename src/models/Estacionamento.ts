import Vaga from "./Vaga";

export default class Estacionamento {
  private vagas!: Vaga;
  private taxaPorHora!: number;
  private DataHoraChegada!: Date;
  private DataHoraSaida!: Date;
}