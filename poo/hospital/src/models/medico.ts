import { Repositorio } from "./../repositorys/repositorio";
import { Paciente } from "./paciente";
import { Pessoa } from "./pessoa";

export class Medico extends Pessoa{ 
    private _especialidade: string;

    constructor(nome: string, especialidade: string) {
        super(nome);
        this.especialidade = especialidade;
    }

    get especialidade():string {
        return this._especialidade;
    }

    set especialidade(especialidade: string) {
        this._especialidade = especialidade;
    }
}