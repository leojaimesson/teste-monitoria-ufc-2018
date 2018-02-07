"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repositorio_1 = require("../repositorys/repositorio");
const inbox_1 = require("../services/inbox");
class Pessoa {
    constructor(nome) {
        this.nome = nome;
        this.vinculos = new repositorio_1.Repositorio();
        this._inbox = new inbox_1.InboxService();
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get inbox() {
        return this._inbox;
    }
    set inbox(inboxService) { }
    listarVinculos() {
        return this.vinculos.values();
    }
    vincular(pessoa) {
        this.vinculos.add(pessoa.nome, pessoa);
    }
    temVinculo(nome) {
        return this.vinculos.has(nome);
    }
    receberMensagen(inbox) {
        this.inbox.adicionarMensagem(inbox);
    }
    mostrarMensagens() {
        return this.inbox.mostrarMensagens();
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=pessoa.js.map