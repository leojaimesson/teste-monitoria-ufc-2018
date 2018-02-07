import { Pessoa } from "./pessoa";

export class Inbox {
    private _remetente: Pessoa;
    private _destinatario: Pessoa;
    private _mensagem: string;

    constructor(remetente: Pessoa, destinatario: Pessoa, mensagem: string) {
        this.remetente = remetente;
        this.destinatario = destinatario;
        this.mensagem = mensagem;
    }

    get remetente(): Pessoa {
        return this._remetente;
    }

    set remetente(remetente: Pessoa) {
        this._remetente = remetente;
    }

    get destinatario(): Pessoa {
        return this._destinatario;
    }

    set destinatario(destinatario: Pessoa) {
        this._destinatario = destinatario;
    }

    get mensagem(): string {
        return this._mensagem;
    }

    set mensagem(mensagem: string) {
        this._mensagem = mensagem;
    }
}