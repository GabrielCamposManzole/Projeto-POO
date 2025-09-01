
import Cliente from './Cliente';

export default class ClienteMensalista extends Cliente {

  private tipoCliente: string = "Mensalista";

  constructor(nome: string, cpf: string, telefone: number, mensalidade: number) {
    super(nome, cpf, telefone);
    
  }

  public getTipoCliente(): string {
    return this.tipoCliente;

  }

  public setTipoCliente(tipoCliente: string): void {
    this.tipoCliente = tipoCliente;
  }
  
}
