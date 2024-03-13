import { ask } from "../../prompts/prompt";
import PessoaService from "../../services/PessoaService";
import { Command } from "../Command";

export default class PessoaCadastrarCommand implements Command {
  pessoaService: PessoaService = new PessoaService()
  
  async execute() {
      console.log("Preencha os dados abaixo.");
      let nome: string = await ask("Nome: ");
      let fone: string = await ask("Telefone: ");
      let endereco: string = await ask("Endereço: ");
      await this.pessoaService.cadastrar(nome, Number(fone), endereco);
  }
}
