"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Inbox {
    constructor(remetente, destinatario, mensagem) {
        this.remetente = remetente;
        this.destinatario = destinatario;
        this.mensagem = mensagem;
    }
    get remetente() {
        return this._remetente;
    }
    set remetente(remetente) {
        this._remetente = remetente;
    }
    get destinatario() {
        return this._destinatario;
    }
    set destinatario(destinatario) {
        this._destinatario = destinatario;
    }
    get mensagem() {
        return this._mensagem;
    }
    set mensagem(mensagem) {
        this._mensagem = mensagem;
    }
}
exports.Inbox = Inbox;
//# sourceMappingURL=inbox.js.map