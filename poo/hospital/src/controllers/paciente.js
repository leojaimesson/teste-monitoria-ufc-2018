"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repositorio_1 = require("./../repositorys/repositorio");
class PacienteController {
    constructor() {
        this.repositorio = new repositorio_1.Repositorio();
    }
    adicionarPacientes(pacientes) {
        pacientes.forEach((paciente) => {
            this.repositorio.add(paciente.nome, paciente);
        });
    }
    listarPacientes() {
        return this.repositorio.values();
    }
    buscarPaciente(nome) {
        return this.repositorio.get(nome);
    }
}
exports.PacienteController = PacienteController;
//# sourceMappingURL=paciente.js.map