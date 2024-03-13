import { ask } from "../../prompts/prompt";
import ContaService from "../../services/ContaService";
import { Command } from "../Command";
let option: string = "";
let tipo: string = "";
let valor: string = "";

export default class ContaEditarCommand implements Command {
  contaService: ContaService = new ContaService();

  async execute() {
    option = await ask("Digite S para SUBSTITUIR ou D para DELETAR: ");
      if (option == "s") {
        option = await ask("Digite o ID da pessoa que voce quer SUBSTITUIR: ");
        await this.contaVerificaSubs(Number(option));
      } else if (option == "d") {
        option = await ask("Digite o ID da CONTA que voce quer DELETAR: ");
        await this.contaService.removeConta(Number(option));
      }
  }

  async contaVerificaSubs(id: number) {
    if (!(await this.contaService.findConta(id))) {
      console.log("*** Pessoa nao existe no banco ***");
    } else {
      option = await ask("Deseja SUBSTITUIR TIPO? [S/N]? ");
      if (option == "s") {
        tipo = await ask("Digite o novo NOME: ");
      }
      option = await ask("Deseja SUBSTITUIR VALOR? [S/N]? ");
      if (option == "s") {
        valor = await ask("Digite o novo TELEFONE: ");
      }
      await this.contaService.replaceConta(tipo, Number(valor));
      console.log("*** Conta substituida com sucesso! ****");
    }
  }


}
