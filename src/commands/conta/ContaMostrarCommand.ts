import { ask } from "../../prompts/prompt";
import ContaService from "../../services/ContaService";
import { Command } from "../Command";

export default class ContaMostrarCommand implements Command {
  contaService: ContaService = new ContaService();

  async execute() {
    await this.contaService.mostraContas();
  }
}
