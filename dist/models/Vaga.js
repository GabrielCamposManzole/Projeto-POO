export default class Vaga {
    constructor(numero, ocupada) {
        this.numero = numero;
        this.ocupada = ocupada;
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    isOcupada() {
        return this.ocupada;
    }
    setOcupada(ocupada) {
        this.ocupada = ocupada;
    }
}