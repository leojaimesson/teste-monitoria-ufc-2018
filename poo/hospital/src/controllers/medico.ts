import { Repositorio } from "./../repositorys/repositorio";
import { Medico } from "./../models/medico";

export class MedicoController {
    private repositorio: Repositorio<Medico>;

    constructor() {
        this.repositorio = new Repositorio<Medico>();
    }

    public adicionarMedicos(medicos: Medico[]): void {
        medicos.forEach((medico: Medico) => {
            this.repositorio.add(medico.nome, medico);
        });
    }

    public listarMedicos(): Array<Medico> {
        return this.repositorio.values();
    }

    public buscarMedico(nome: string): Medico {
        return this.repositorio.get(nome);
    }
}