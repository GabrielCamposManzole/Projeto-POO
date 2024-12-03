export default class Cliente {
  private nome: string;
  private cpf: number;

  constructor( nome: string, cpf: number) {
    this.nome = nome;
    this.cpf =cpf;
  }

  public getNome(): string{
    return this.nome;
}

public setNome(nome: string): void{
    this.nome = nome;
}

public getCpf(): number{
  return this.cpf;
}

public setCpf(cpf: number): void{
  this.cpf = cpf;
}
}
