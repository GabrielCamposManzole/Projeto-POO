export default class Estacionamento {
    constructor(nome, endereco, capacidade) {
        this.nome = nome;
        this.endereco = endereco;
        this.capacidade = capacidade;
        this.clientes = [];
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getEndereco() {
        return this.endereco;
    }
    setEndereco(endereco) {
        this.endereco = endereco;
    }
    getCapacidade() {
        return this.capacidade;
    }
    setCapacidade(capacidade) {
        this.capacidade = capacidade;
    }
    getClientes() {
        return this.clientes;
    }
    
}