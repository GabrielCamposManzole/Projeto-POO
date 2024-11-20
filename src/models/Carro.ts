class Carro extends Veiculo {
  
  constructor(placa: string, modelo: string, public numPortas: number) {
    super(placa, modelo, TipoVeiculo.Carro);
  }
}
