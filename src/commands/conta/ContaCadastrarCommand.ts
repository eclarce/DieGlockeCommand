import { ask } from "../../prompts/prompt";
import ContaService from "../../services/ContaService";
import { Command } from "../Command";

export default class ContaCadastrarCommand implements Command {
  contaService: ContaService = new ContaService();

  async execute() {
    console.log("Preencha os dados abaixo.");
    let tipo: string = await ask("Tipo: ");
    let valor: string = await ask("Valor: ");
    await this.contaService.cadastrarConta(tipo, Number(valor));
  }
}
