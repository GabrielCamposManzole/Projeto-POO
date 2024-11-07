export default class Cliente {
  private name!: string;
  private cpf!: number;

  public setNome(name: string): void {
    this.name = name;
  }

  public getNome(): string {
    return this.name;
  }

  public setCpf(cpf: number): void {
    this.cpf = cpf;
  }

  public getCpf(): number {
    return this.cpf;
  }
}
