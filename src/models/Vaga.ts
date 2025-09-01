import { TipoVeiculo } from "./TipoVeiculo";


export default class vaga {
  
private numeroVaga: number;
private ocupada: boolean;
private tipoVeiculo: TipoVeiculo;

constructor(numeroVaga: number, tipoVeiculo: TipoVeiculo) {
    this.numeroVaga = numeroVaga;
    this.tipoVeiculo = tipoVeiculo;
    this.ocupada = false; // Inicialmente, a vaga está desocupada
}

public getNumeroVaga(): number {
    return this.numeroVaga;
}

public isOcupada(): boolean {
    return this.ocupada;
}

public getTipoVeiculo(): TipoVeiculo {
    return this.tipoVeiculo;
}

public ocuparVaga(): void {
    this.ocupada = true;
}

public liberarVaga(): void {
    this.ocupada = false;
}
}