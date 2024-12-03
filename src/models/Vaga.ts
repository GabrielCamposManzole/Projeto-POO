export default class Vaga {
    private numero: number;
    private tipo: string;

    constructor( numero: number, tipo: string) {
        this.tipo = tipo;
        this.numero = numero;
    } 

    public getNumeroDaVaga(): number{
        return this.numero;
    }

    public setNumeroDaVaga(numero: number): void{
        this.numero = numero;
    }
    
    public getTipoDaVaga(): string{
        return this.tipo;
    }

    public setTipoDaVaga(tipo: string): void{
        this.tipo = tipo;
    }
}