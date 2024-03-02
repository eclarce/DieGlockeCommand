import ContaService from "../services/ContaService";

const contaService = new ContaService();
import { ask } from "../prompts/prompt";
let option: string = "";
let valor: string = "";
let tipo: string = "";

export default class ActionsConta {
  async iniciaCadastroConta(flag: string) {
    if (flag == "c") {
      console.log("Preencha os dados abaixo.");
      let tipo: string = await ask("Tipo:");
      let valor: string = await ask("Valor:");
      console.log("Conta cadastrada");
      await contaService.cadastrarConta(tipo, Number(valor));
    }
  }

  async iniciaMostraContas(flag: string) {
    if (flag == "t") {
      await contaService.mostraContas();
    }
  }

  async iniciaEdicaoConta(flag: string) {
    if (flag == "e") {
      option = await ask("Digite S para SUBSTITUIR ou D para DELETAR: ");
      if (option == "s") {
        option = await ask("Digite o ID da pessoa que voce quer SUBSTITUIR: ");
        await this.substituiConta(Number(option));
      } else if (option == "d") {
        option = await ask("Digite o ID da CONTA que voce quer DELETAR: ");
        await contaService.removeConta(Number(option));
      }
    }
  }

  async iniciaPesquisaConta(flag: string) {
    if (flag == "p") {
      option = await ask("Deseja PESQUISAR por TIPO? [S/N]? ");
      if (option == "s") {
        tipo = await ask("Digite o TIPO: ");
      }
      option = await ask("Deseja PESQUISAR por VALOR? [S/N]? ");
      if (option == "s") {
        valor = await ask("Digite o VALOR: ");
      }
      await contaService.searchConta(tipo, Number(valor));
    }
  }

  async substituiConta(id: number) {
    if (!(await contaService.findConta(id))) {
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
      await contaService.replaceConta(tipo, Number(valor));
      console.log("*** Conta substituida com sucesso! ****");
    }
  }
}
