import { ask } from "../prompts/prompt";
import { Menu } from "./Menu";
import ActionsConta from "../commands/ActionsConta";
const actionsConta = new ActionsConta();
let option: string = "";
import { AjudaMenu } from "./AjudaMenu";
import ContaCadastrarCommand from "../commands/conta/ContaCadastrarCommand";
import ContaMostrarCommand from "../commands/conta/ContaMostrarCommand";
import ContaEditarCommand from "../commands/conta/ContaEditarCommand";
import ContaPesquisarCommand from "../commands/conta/ContaPesquisarCommand";
// let currentPath: string = "";
// // const ajudaMenu = new AjudaMenu();
export class ContaMainMenu extends Menu {
  setupSubMenus(): void {}
  setupCommands(): void {
    this.addCommand(new ContaCadastrarCommand(), "c");
    this.addCommand(new ContaMostrarCommand(), "t");
    this.addCommand(new ContaEditarCommand(), "e");
    this.addCommand(new ContaPesquisarCommand(), "p");
  }
  showMenu() {
    console.log("Cadastrar conta            [c]");
    console.log("Ver contas cadastradas     [t]");
    console.log("Editar contas              [e]");
    console.log("Pesquisar contas           [p]");
  }
}
