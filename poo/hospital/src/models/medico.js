"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = require("./pessoa");
class Medico extends pessoa_1.Pessoa {
    constructor(nome, especialidade) {
        super(nome);
        this.especialidade = especialidade;
    }
    get especialidade() {
        return this._especialidade;
    }
    set especialidade(especialidade) {
        this._especialidade = especialidade;
    }
}
exports.Medico = Medico;
//# sourceMappingURL=medico.js.map