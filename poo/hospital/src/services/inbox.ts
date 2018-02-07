import { Repositorio } from "../repositorys/repositorio";
import { Inbox } from "../models/inbox";

export class InboxService {
    private caixaEntrada: Array<Inbox>;

    constructor() {
        this.caixaEntrada = new Array<Inbox>();
    }

    public adicionarMensagem(inbox: Inbox) {
        this.caixaEntrada.unshift(inbox);
    }

    public mostrarMensagens(): string {
        let mensagens = [];
        while(this.caixaEntrada.length > 0) {
            let inbox: Inbox = this.caixaEntrada[this.caixaEntrada.length - 1];
            mensagens.push(`[${inbox.remetente.nome}: ${inbox.mensagem}]`);
            this.caixaEntrada.pop();
        }
        return mensagens.join("\n");
    }
}