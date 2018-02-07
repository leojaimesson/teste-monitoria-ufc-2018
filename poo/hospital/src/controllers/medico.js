"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repositorio_1 = require("./../repositorys/repositorio");
class MedicoController {
    constructor() {
        this.repositorio = new repositorio_1.Repositorio();
    }
    adicionarMedicos(medicos) {
        medicos.forEach((medico) => {
            this.repositorio.add(medico.nome, medico);
        });
    }
    listarMedicos() {
        return this.repositorio.values();
    }
    buscarMedico(nome) {
        return this.repositorio.get(nome);
    }
}
exports.MedicoController = MedicoController;
//# sourceMappingURL=medico.js.map