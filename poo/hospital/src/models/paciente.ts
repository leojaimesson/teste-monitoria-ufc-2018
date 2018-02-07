import { Repositorio } from "./../repositorys/repositorio";
import { Medico } from "./medico";
import { Pessoa } from "./pessoa";

export class Paciente extends Pessoa{ 
    
    private _diagnostico: string;

    constructor(nome: string, diagnostico: string) {
        super(nome);
        this.diagnostico = diagnostico;
    }

    get diagnostico():string {
        return this._diagnostico;
    }

    set diagnostico(diagnostico: string) {
        this._diagnostico = diagnostico;
    }
}