// ClienteAvulso.ts
import Cliente from './Cliente';

export default class ClienteAvulso extends Cliente {
  // Podemos adicionar propriedades específicas para o ClienteAvulso, se necessário
  private dataDeCadastro: Date;

  // O construtor chama o da classe pai e adiciona o comportamento adicional
  constructor(nome: string, cpf: string, telefone: number, dataDeCadastro: Date) {
    super(nome, cpf, telefone); // Chama o construtor da classe Cliente
    this.dataDeCadastro = dataDeCadastro;
  }

  // Método para calcular o tempo desde o cadastro do cliente avulso
  calcularTempoDeCadastro(): number {
    const hoje = new Date();
    const diferencaEmMilisegundos = hoje.getTime() - this.dataDeCadastro.getTime();
    const dias = Math.floor(diferencaEmMilisegundos / (1000 * 60 * 60 * 24));
    return dias;
  }

  // Método para retornar se o cliente é recente (ex: menos de 30 dias de cadastro)
  ehClienteRecente(): boolean {
    const diasDesdeCadastro = this.calcularTempoDeCadastro();
    return diasDesdeCadastro <= 30;
  }
}
