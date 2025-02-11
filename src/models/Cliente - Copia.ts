export default class Cliente {
  private nome: string;
  private cpf: string;
  private telefone: number;

  constructor( nome: string, cpf: string, telefone: number) {
    this.nome = nome;
    this.cpf = cpf;
    this.telefone = telefone;
  }

  public getNome(): string{
    return this.nome;
}

public setNome(nome: string): void{
    this.nome = nome;
}

public getCpf(): string{
  return this.cpf;
}

public setCpf(cpf: string): void{
  this.cpf = cpf;
}

public getTelefone(): number {
  return this.telefone;
}

public setTelefone(telefone: number): void {
  this.telefone = telefone;
}


}
