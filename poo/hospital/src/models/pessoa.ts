import { Repositorio } from "../repositorys/repositorio";
import { InboxService } from "../services/inbox";
import { Inbox } from "./inbox";

export class Pessoa {
    private _nome: string;
    private vinculos: Repositorio<Pessoa>;
    private _inbox: InboxService;

    constructor(nome: string) {
        this.nome = nome;
        this.vinculos = new Repositorio<Pessoa>();
        this._inbox = new InboxService();
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get inbox(): InboxService {
        return this._inbox;
    }

    set inbox(inboxService: InboxService) { }

    public listarVinculos(): Array<Pessoa> {
        return this.vinculos.values();
    }

    public vincular(pessoa: Pessoa): void {
        this.vinculos.add(pessoa.nome, pessoa);
    }

    public temVinculo(nome: string): boolean {
        return this.vinculos.has(nome);
    }

    public receberMensagen(inbox: Inbox):void {
        this.inbox.adicionarMensagem(inbox);
    }

    public mostrarMensagens(): string {
        return this.inbox.mostrarMensagens();
    }

}