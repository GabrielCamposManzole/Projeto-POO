
export default class Veiculo {
  private placa: string;
  private modelo: string;
  private cor: string;
 
    
    constructor( placa: string, modelo: string, cor: string ) {
      this.placa = placa;
      this.modelo = modelo;
      this.cor = cor; 
    }

    public getPlaca(): string {
      return this.placa;
    }

    public setPlaca(placa: string): void {
      this.placa = placa;
    }

    public getModelo(): string {
      return this.modelo;
    }

    public setMOdelo(modelo: string): void {
      this.modelo = modelo;
    }

    public getCor(): String {
      return this.cor;
    }

    public setCor(cor: string): void {
      this.cor = cor;
    }

  }

  