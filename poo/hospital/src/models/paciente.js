"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = require("./pessoa");
class Paciente extends pessoa_1.Pessoa {
    constructor(nome, diagnostico) {
        super(nome);
        this.diagnostico = diagnostico;
    }
    get diagnostico() {
        return this._diagnostico;
    }
    set diagnostico(diagnostico) {
        this._diagnostico = diagnostico;
    }
}
exports.Paciente = Paciente;
//# sourceMappingURL=paciente.js.map