import { PacienteController } from "./controllers/paciente";
import { MedicoController } from "./controllers/medico";
import { Paciente } from "./models/paciente";
import { Medico } from "./models/medico";
import { Pessoa } from "./models/pessoa";
import { InboxService } from "./services/inbox";
import { Inbox } from "./models/inbox";

declare function require(name: string): any;
let readline = require('readline-sync');
readline.setDefaultOptions({ keepWhitespace: true });

function main() {

    let pacienteController: PacienteController = new PacienteController();
    let medicoController: MedicoController = new MedicoController();
    let op: string[] = [""];

    while (op[0] != "fim") {
        console.log("================================================");
        op = readline.question(`Digite comando ou help: `).split(" ");

        if (op[0] == "help") {
            console.log("addPacs $nome-$diagnostico $nome-$diagnostico $nome-$diagnostico ...");
            console.log("addMeds $nome-$especialidade $nome-$especialidade $nome-$especialidade ...");
            console.log("seeAll");
            console.log("   Pac: $nome:$diagnostico     Meds: [ ... ]");
            console.log("   Med: $nome:$especialidade   Pacs: [ ... ]");
            console.log("tie $med $pac $pac $pac ...");
            console.log("msg $remetente $destinatario $mensagem");
            console.log("inbox $medico ou paciente");
        }

        if (op[0] === "addPacs") {
            let stringPacientes: Array<string> = op.slice(1, op.length);
            let pacientes: Array<Paciente> = stringPacientes.map((pac: string) => {
                let nome: string = pac.split("-")[0];
                let diagnostico: string = pac.split("-")[1];
                return new Paciente(nome, diagnostico);
            });
            pacienteController.adicionarPacientes(pacientes);
            console.log("done");
        }

        if (op[0] === "addMeds") {
            let stringMedicos: Array<string> = op.slice(1, op.length);
            let medicos: Array<Medico> = stringMedicos.map((med: string) => {
                let nome: string = med.split("-")[0];
                let especialidade: string = med.split("-")[1];
                return new Medico(nome, especialidade);
            });
            medicoController.adicionarMedicos(medicos);
            console.log("done");
        }

        if (op[0] === "seeAll") {
            pacienteController.listarPacientes().forEach((paciente: Paciente) => {
                let texto: string = `Pac: ${paciente.nome}:${paciente.diagnostico}   Meds: [ ${paciente.listarVinculos().reduce((nomesMedicos: string, medico: Pessoa) => {
                    return nomesMedicos + medico.nome + " ";
                }, "")} ]`;
                console.log(texto);
            });
            medicoController.listarMedicos().forEach((medico: Medico) => {
                let texto: string = `Med: ${medico.nome}:${medico.especialidade}   Meds: [ ${medico.listarVinculos().reduce((nomesPacientes: string, paciente: Pessoa) => {
                    return nomesPacientes + paciente.nome + " ";
                }, "")} ]`;
                console.log(texto);
            });
        }

        if (op[0] === "tie") {

            let medico: Medico = medicoController.buscarMedico(op[1]);
            let nomesPacientes: Array<string> = op.slice(2, op.length);
            let flag = false;

            nomesPacientes.forEach((nome: string) => {
                if (!medico.temVinculo(nome)) {
                    let paciente: Paciente = pacienteController.buscarPaciente(nome);
                    if (!paciente.listarVinculos().some((outro: any) => outro.especialidade === medico.especialidade)) {
                        medico.vincular(paciente);
                        paciente.vincular(medico);
                        flag = true;
                    }
                    else {
                        console.log(`fail: ja existe outro medico da especialidade ${medico.especialidade}`);
                    }
                } else {
                    console.log(`fail: ${medico.nome} ja e medico do ${nome}`);
                }
            });

            if (flag) {
                console.log("done");
            }
        }

        if (op[0] === "msg") {
            let remetente = medicoController.buscarMedico(op[1]) || pacienteController.buscarPaciente(op[1]);
            let destinatario = medicoController.buscarMedico(op[2]) || pacienteController.buscarPaciente(op[2]);

            if (remetente.temVinculo(destinatario.nome)) {
                let inbox = new Inbox(remetente, destinatario, op.slice(3, op.length).join(" ") || "");
                destinatario.receberMensagen(inbox);
                console.log("done");
            } else {
                console.log(`${remetente.nome} nao conhece ${destinatario.nome}`);
            }
        }

        if (op[0] === "inbox") {
            let imprimir = medicoController.buscarMedico(op[1]) || pacienteController.buscarPaciente(op[1]);
            console.log(imprimir.mostrarMensagens());
        }

    }
}

main();