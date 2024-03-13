import { ask } from "../../prompts/prompt";
import PessoaService from "../../services/PessoaService";
import { Command } from "../Command";
let option: string = "";
let nome: string = "";
let fone: string = "";
let endereco: string = "";

export default class PessoaPesquisarCommand implements Command {
  pessoaService: PessoaService = new PessoaService()
  
  async execute() {
    option = await ask("Deseja PESQUISAR por NOME? [S/N]? ");
    if (option == "s") {
      nome = await ask("Digite o NOME: ");
    }
    option = await ask("Deseja PESQUISAR por TELEFONE? [S/N]? ");
    if (option == "s") {
      fone = await ask("Digite o TELEFONE: ");
    }
    option = await ask("Deseja PESQUISAR por ENDEREÇO? [S/N]? ");
    if (option == "s") {
      endereco = await ask("Digite o ENDEREÇO: ");
    }
    await this.pessoaService.searchPessoa(nome, Number(fone), endereco);
  }
}