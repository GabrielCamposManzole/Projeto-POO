class ClienteMensalista extends Cliente {
  constructor(
    nome: string,
    cpf: string,
    public dataVencimento: Date,
    public valorMensalidade: number
  ) {
    super(nome, cpf);
  }
}
