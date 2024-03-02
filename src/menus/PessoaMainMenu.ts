import { ask } from "../prompts/prompt";
import { Menu } from "./Menu";
import ActionsPessoa from "../commands/ActionsPessoa";
const actionsPessoa = new ActionsPessoa();
let option: string = "";

export class PessoaMainMenu extends Menu {
  showMenu() {
    console.log(`Action:`, PessoaMainMenu.name);

    console.log("==============================");
    console.log("Cadastrar pessoa           [c]");
    console.log("Ver pessoas cadastradas    [t]");
    console.log("Editar pessoas             [e]");
    console.log("Pesquisar pessoas          [p]");
    console.log("==============================");
    console.log("Sair [s]");
  }

  async execute(s: string) {
    if (s == "p") {
      while (option != "s") {
        this.showMenu();
        option = await ask("Opcao pessoa: ");
        await actionsPessoa.iniciaCadastroPessoa(option);
        await actionsPessoa.iniciaMostraPessoa(option);
        await actionsPessoa.iniciaEdicaoPessoa(option);
        await actionsPessoa.iniciaPesquisaPessoa(option);
      }
    }
  }
}
