import PessoaService from "../../services/PessoaService";
import { Command } from "../Command";

export default class PessoaMostrarCommand implements Command {
  pessoaService: PessoaService = new PessoaService();

  async execute() {
    await this.pessoaService.exibirTodos();
  }
}
