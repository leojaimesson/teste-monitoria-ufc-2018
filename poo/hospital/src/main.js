"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paciente_1 = require("./controllers/paciente");
const medico_1 = require("./controllers/medico");
const paciente_2 = require("./models/paciente");
const medico_2 = require("./models/medico");
const inbox_1 = require("./models/inbox");
let readline = require('readline-sync');
readline.setDefaultOptions({ keepWhitespace: true });
function main() {
    let pacienteController = new paciente_1.PacienteController();
    let medicoController = new medico_1.MedicoController();
    let op = [""];
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
            let stringPacientes = op.slice(1, op.length);
            let pacientes = stringPacientes.map((pac) => {
                let nome = pac.split("-")[0];
                let diagnostico = pac.split("-")[1];
                return new paciente_2.Paciente(nome, diagnostico);
            });
            pacienteController.adicionarPacientes(pacientes);
            console.log("done");
        }
        if (op[0] === "addMeds") {
            let stringMedicos = op.slice(1, op.length);
            let medicos = stringMedicos.map((med) => {
                let nome = med.split("-")[0];
                let especialidade = med.split("-")[1];
                return new medico_2.Medico(nome, especialidade);
            });
            medicoController.adicionarMedicos(medicos);
            console.log("done");
        }
        if (op[0] === "seeAll") {
            pacienteController.listarPacientes().forEach((paciente) => {
                let texto = `Pac: ${paciente.nome}:${paciente.diagnostico}   Meds: [ ${paciente.listarVinculos().reduce((nomesMedicos, medico) => {
                    return nomesMedicos + medico.nome + " ";
                }, "")} ]`;
                console.log(texto);
            });
            medicoController.listarMedicos().forEach((medico) => {
                let texto = `Med: ${medico.nome}:${medico.especialidade}   Meds: [ ${medico.listarVinculos().reduce((nomesPacientes, paciente) => {
                    return nomesPacientes + paciente.nome + " ";
                }, "")} ]`;
                console.log(texto);
            });
        }
        if (op[0] === "tie") {
            let medico = medicoController.buscarMedico(op[1]);
            let nomesPacientes = op.slice(2, op.length);
            let flag = false;
            nomesPacientes.forEach((nome) => {
                if (!medico.temVinculo(nome)) {
                    let paciente = pacienteController.buscarPaciente(nome);
                    if (!paciente.listarVinculos().some((outro) => outro.especialidade === medico.especialidade)) {
                        medico.vincular(paciente);
                        paciente.vincular(medico);
                        flag = true;
                    }
                    else {
                        console.log(`fail: ja existe outro medico da especialidade ${medico.especialidade}`);
                    }
                }
                else {
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
                let inbox = new inbox_1.Inbox(remetente, destinatario, op.slice(3, op.length).join(" ") || "");
                destinatario.receberMensagen(inbox);
                console.log("done");
            }
            else {
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
//# sourceMappingURL=main.js.map