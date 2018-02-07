"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InboxService {
    constructor() {
        this.caixaEntrada = new Array();
    }
    adicionarMensagem(inbox) {
        this.caixaEntrada.unshift(inbox);
    }
    mostrarMensagens() {
        let mensagens = [];
        while (this.caixaEntrada.length > 0) {
            let inbox = this.caixaEntrada[this.caixaEntrada.length - 1];
            mensagens.push(`[${inbox.remetente.nome}: ${inbox.mensagem}]`);
            this.caixaEntrada.pop();
        }
        return mensagens.join("\n");
    }
}
exports.InboxService = InboxService;
//# sourceMappingURL=inbox.js.map