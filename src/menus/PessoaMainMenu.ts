import { ask } from "../prompts/prompt";
import { Menu } from "./Menu";
import ActionsPessoa from "../commands/ActionsPessoa";
const actionsPessoa = new ActionsPessoa();
let option: string = "";
import { AjudaMenu } from "./AjudaMenu";
let currentPath: string = "";
const ajudaMenu = new AjudaMenu();

export class PessoaMainMenu extends Menu {
  showMenu() {
    console.log(`Action:`, PessoaMainMenu.name);
    console.log(Menu.bancoPath);
    console.log("==============================");
    console.log("Cadastrar pessoa           [c]");
    console.log("Ver pessoas cadastradas    [t]");
    console.log("Editar pessoas             [e]");
    console.log("Pesquisar pessoas          [p]");
    console.log("==============================");
    console.log("Ajuda [a]");
    console.log("Sair  [s]");
  }

  async execute(s: string) {
    if (s == "p") {
      this.path = "conta";
      currentPath = this.path;
      Menu.bancoPath.push(currentPath);
      while (Menu.bancoPath.length > 1) {
        this.showMenu();
        option = await ask("Opcao pessoa: ");
        if (option == "s") {
          Menu.bancoPath.splice(1, 1);
        }
        await ajudaMenu.execute(option);
        await actionsPessoa.iniciaCadastroPessoa(option);
        await actionsPessoa.iniciaMostraPessoa(option);
        await actionsPessoa.iniciaEdicaoPessoa(option);
        await actionsPessoa.iniciaPesquisaPessoa(option);
      }
    }
  }
}
