// ClienteAvulso.ts
import Cliente from './Cliente';

export default class ClienteAvulso extends Cliente {
    private ultimaCompra: Date;

    constructor(nome: string, cpf: string, telefone: number, ultimaCompra: Date) {
        super(nome, cpf, telefone);
        this.ultimaCompra = ultimaCompra;
    }

    calcularTempoDesdeUltimaCompra(): number {
        const hoje = new Date();
        const diferencaEmMilisegundos = hoje.getTime() - this.ultimaCompra.getTime();
        const dias = Math.floor(diferencaEmMilisegundos / (1000 * 60 * 60 * 24));
        return dias;
    }

    marcarNovaCompra(): void {
        this.ultimaCompra = new Date();
    }

    ehClienteRecente(): boolean {
        const diasDesdeUltimaCompra = this.calcularTempoDesdeUltimaCompra();
        return diasDesdeUltimaCompra <= 30;
    }
}