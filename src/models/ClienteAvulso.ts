
import Cliente from './Cliente';

export default class ClienteAvulso extends Cliente {

  private tipoCliente: string = 'Avulso';
  
  constructor(nome: string, cpf: string, telefone: number) {
    super(nome, cpf, telefone); 

  }

  public getTipoCliente(): string {
    return this.tipoCliente;
  }

  public setTipoCliente(tipoCliente: string): void {
    this.tipoCliente = tipoCliente;
  } 





}
