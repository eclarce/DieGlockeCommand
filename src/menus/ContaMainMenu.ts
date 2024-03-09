import { ask } from "../prompts/prompt";
import { Menu } from "./Menu";
import ActionsConta from "../commands/ActionsConta";
const actionsConta = new ActionsConta();
let option: string = "";
import { AjudaMenu } from "./AjudaMenu";
let currentPath: string = "";
const ajudaMenu = new AjudaMenu();
export class ContaMainMenu extends Menu {
  showMenu() {
    console.log(`Action:`, ContaMainMenu.name);
    console.log(Menu.bancoPath);
    console.log("==============================");
    console.log("Cadastrar conta            [c]");
    console.log("Ver contas cadastradas     [t]");
    console.log("Editar contas              [e]");
    console.log("Pesquisar contas           [p]");
    console.log("==============================");
    console.log("Ajuda [a]");
    console.log("Sair  [s]");
  }

  async execute(s: string) {
    if (s == "c") {
      this.path = "conta";
      currentPath = this.path;
      Menu.bancoPath.push(currentPath);
      while (Menu.bancoPath.length > 1) {
        this.showMenu();
        option = await ask("Opcao conta: ");
        if (option == "s") {
          Menu.bancoPath.splice(1, 1);
        }
        await ajudaMenu.execute(option);
        await actionsConta.iniciaCadastroConta(option);
        await actionsConta.iniciaMostraContas(option);
        await actionsConta.iniciaEdicaoConta(option);
        await actionsConta.iniciaPesquisaConta(option);
      }
    }
  }
}
