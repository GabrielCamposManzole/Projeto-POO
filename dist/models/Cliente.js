"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    setNome(name) {
        this.name = name;
    }
    getNome() {
        return this.name;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    getCpf() {
        return this.cpf;
    }
}
exports.default = Cliente;
