import { Repositorio } from "./../repositorys/repositorio";
import { Paciente } from "./../models/paciente";

export class PacienteController {
    private repositorio : Repositorio<Paciente>;

    constructor() {
        this.repositorio = new Repositorio<Paciente>();
    }

    public adicionarPacientes(pacientes : Paciente[]): void {
        pacientes.forEach((paciente: Paciente) => {
            this.repositorio.add(paciente.nome, paciente);
        });
    }

    public listarPacientes(): Array<Paciente> {
        return this.repositorio.values();
    } 

    public buscarPaciente(nome: string): Paciente {
        return this.repositorio.get(nome);
    }
}