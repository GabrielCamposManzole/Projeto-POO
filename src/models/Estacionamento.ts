class Estacionamento {
  private vagas: Vaga[] = [];
  private clientes: Map<string, Cliente> = new Map(); // Map para buscar clientes por placa

  constructor(vagas: Vaga[]) {
    this.vagas = vagas;
  }

  estacionar(veiculo: Veiculo, cliente: Cliente): boolean {
    // Encontrar uma vaga disponível do tipo adequado
    const vagaDisponivel = this.vagas.find(
      (vaga) => vaga.tipo === veiculo.tipo
    );
    if (!vagaDisponivel) {
      return false;
    }
    // Associar o veículo à vaga e o cliente ao estacionamento
    this.clientes.set(veiculo.placa, cliente);
    // ... outras lógicas ...
    return true;
  }

  retirar(placa: string): boolean {
    // ... lógica para retirar o veículo e liberar a vaga ...
    return true;
  }

  calcularTarifa(cliente: Cliente): number {
    // Lógica para calcular a tarifa com base no tipo de cliente e tempo de permanência
    if (cliente instanceof ClienteMensalista) {
      // ... calcular tarifa mensal ...
    } else if (cliente instanceof ClienteAvulso) {
      // ... calcular tarifa horária ...
    }
    return 0;
  }
}
