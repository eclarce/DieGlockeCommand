import ActionsPessoa from "../commands/ActionsPessoa";
import PessoaCadastrarCommand from "../commands/pessoa/PessoaCadastrarCommand";
import PessoaEditarCommand from "../commands/pessoa/PessoaEditarCommand";
import PessoaMostrarCommand from "../commands/pessoa/PessoaMostrarCommand";
import PessoaPesquisarCommand from "../commands/pessoa/PessoaPesquisarCommand";
import TrocarMenuCommand from "../commands/pessoa/TrocarMenuCommand";
import { AjudaMenu } from "./AjudaMenu";
import { Menu } from "./Menu";
import { MainMenu } from "./MainMenu";
// const actionsPessoa = new ActionsPessoa();
// let option: string = "";
// let currentPath: string = "";
// const ajudaMenu = new AjudaMenu();

export class PessoaMainMenu extends Menu {
  setupSubMenus(): void {
    this.addSubMenu(new AjudaMenu({ key: "a", quitKey: "s" }));
  }
  setupCommands(): void {
    // console.log(`EXECUTANDO SETUP COMMANDS ${this.constructor.name}`)
    this.addCommand(new PessoaCadastrarCommand(), "c");
    this.addCommand(new PessoaMostrarCommand(), "t");
    this.addCommand(new PessoaEditarCommand(), "e");
    this.addCommand(new PessoaPesquisarCommand(), "p");
    // this.addCommand(new TrocarMenuCommand(), "a");
  }

  showMenu() {
    console.log("Cadastrar pessoa           [c]");
    console.log("Ver pessoas cadastradas    [t]");
    console.log("Editar pessoas             [e]");
    console.log("Pesquisar pessoas          [p]");
    console.log("Menu Admin                 [a]");
  }
}
