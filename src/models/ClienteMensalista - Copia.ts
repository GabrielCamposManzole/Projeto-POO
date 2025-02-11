// ClienteMensalista.ts
import Cliente from './Cliente';

export default class ClienteMensalista extends Cliente {
  private mensalidade: number;

  constructor(nome: string, cpf: string, telefone: number, mensalidade: number) {
    super(nome, cpf, telefone); // Chama o construtor da classe pai (Cliente)
    this.mensalidade = mensalidade;
  }

  public getMensalidade(): number {
    return this.mensalidade;
  }

  public setMensalidade(mensalidade: number): void {
    this.mensalidade = mensalidade;
  }

  // Outros métodos ou comportamentos específicos para ClienteMensalista podem ser adicionados aqui
}
