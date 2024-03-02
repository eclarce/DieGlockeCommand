import PessoaService from "../services/PessoaService";

const pessoaService = new PessoaService();
import { ask } from "../prompts/prompt";
let option: string = "";
let nome: string = "";
let fone: string = "";
let endereco: string = "";
export default class ActionsPessoa {
  async iniciaCadastroPessoa(flag: string) {
    if (flag == "c") {
      console.log("Preencha os dados abaixo.");
      let nome: string = await ask("Nome: ");
      let fone: string = await ask("Telefone: ");
      let endereco: string = await ask("Endereço: ");
      console.log("Pessoa cadastrada");
      await pessoaService.cadastrar(nome, Number(fone), endereco);
    }
  }

  async iniciaMostraPessoa(flag: string) {
    if (flag == "t") {
      await pessoaService.exibirTodos();
    }
  }

  async iniciaEdicaoPessoa(flag: string) {
    if (flag == "e") {
      option = await ask("Digite S para SUBSTITUIR ou D para DELETAR: ");
      if (option == "s") {
        option = await ask("Digite o ID da pessoa que voce quer SUBSTITUIR: ");
        await this.substituiPessoa(Number(option));
      } else if (option == "d") {
        option = await ask("Digite o ID da pessoa que voce quer DELETAR: ");
        await pessoaService.removerPessoa(Number(option));
      }
    }
  }

  async iniciaPesquisaPessoa(flag: string) {
    if (flag == "p") {
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
      await pessoaService.searchPessoa(nome, Number(fone), endereco);
    }
  }

  async substituiPessoa(id: number) {
    if (!(await pessoaService.findPessoa(id))) {
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
      await pessoaService.replacePessoa(id, nome, Number(fone), endereco);
      console.log("*** Pessoa substituida com sucesso ***");
    }
  }
}
