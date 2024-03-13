import { ask } from "../../prompts/prompt";
import ContaService from "../../services/ContaService";
import { Command } from "../Command";
let option: string = "";
let tipo: string = "";
let valor: string = "";

export default class ContaPesquisarCommand implements Command {
  contaService: ContaService = new ContaService();

  async execute() {
    option = await ask("Deseja PESQUISAR por TIPO? [S/N]? ");
      if (option == "s") {
        tipo = await ask("Digite o TIPO: ");
      }
      option = await ask("Deseja PESQUISAR por VALOR? [S/N]? ");
      if (option == "s") {
        valor = await ask("Digite o VALOR: ");
      }
      await this.contaService.searchConta(tipo, Number(valor));
  }
}