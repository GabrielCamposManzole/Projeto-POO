class ClienteAvulso extends Cliente {
  constructor(nome: string, cpf: string, public horaEntrada: Date) {
    super(nome, cpf);
  }
}
