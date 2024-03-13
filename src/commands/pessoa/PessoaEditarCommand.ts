import { ask } from "../../prompts/prompt";
import PessoaService from "../../services/PessoaService";
import { Command } from "../Command";
let option: string = "";
let nome: string = "";
let fone: string = "";
let endereco: string = "";

export default class PessoaEditarCommand implements Command {
  pessoaService: PessoaService = new PessoaService();

  async execute() {
    option = await ask("Digite S para SUBSTITUIR ou D para DELETAR: ");
    if (option == "s") {
      await this.pessoaService.exibirTodos();
      option = await ask("Digite o ID da pessoa que voce quer SUBSTITUIR: ");
      await this.pessoaVerificaSubs(Number(option));
    } else if (option == "d") {
      await this.pessoaService.exibirTodos();
      option = await ask("Digite o ID da pessoa que voce quer DELETAR: ");
      await this.pessoaService.removerPessoa(Number(option));
    }
  }

  async pessoaVerificaSubs(id: number) {
    if (!(await this.pessoaService.findPessoa(id))) {
      console.log("*** Pessoa nao existe no banco ***");
    } else {
      option = await ask("Deseja SUBSTITUIR NOME? [S/N]? ");
      if (option == "s") {
        nome = await ask("Digite o novo NOME: ");
      }
      option = await ask("Deseja SUBSTITUIR TELEFONE? [S/N]? ");
      if (option == "s") {
        fone = await ask("Digite o novo TELEFONE: ");
      }
      option = await ask("Deseja SUBSTITUIR ENDEREÇO? [S/N]? ");
      if (option == "s") {
        endereco = await ask("Digite o novo ENDEREÇO: ");
      }
      await this.pessoaService.replacePessoa(id, nome, Number(fone), endereco);
      console.log("*** Pessoa substituida com sucesso! ***");
    }
  }
}
