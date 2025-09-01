export default class Pagamento {
    constructor(valor, data, metodo) {
        this.valor = valor;
        this.data = data;
        this.metodo = metodo;
    }
    getValor() {
        return this.valor;
    }
    setValor(valor) {
        this.valor = valor;
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
    getMetodo() {
        return this.metodo;
    }
    setMetodo(metodo) {
        this.metodo = metodo;
    }
}