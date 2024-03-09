import { ask } from "../prompts/prompt";
import { MainMenu } from "./MainMenu";
import { Menu } from "./Menu";
import { AjudaMenu } from "./AjudaMenu";
let option: string = "";
let currentPath: string = "";
const ajudaMenu = new AjudaMenu();
export class EmpresaMainMenu extends Menu {
  showMenu() {
    console.log(`Action:`, EmpresaMainMenu.name);
    console.log(Menu.bancoPath);
    console.log("==============================");
    console.log("Cadastrar empresa          [c]");
    console.log("Ver empresas cadastradas   [t]");
    console.log("Pesquisar empresas         [p]");
    console.log("Editar empresas            [e]");
    console.log("==============================");
    console.log("Ajuda [a]");
    console.log("Sair  [s]");
  }

  async execute(s: string) {
    if (s == "e") {
      this.path = "empresa";
      currentPath = this.path;
      Menu.bancoPath.push(currentPath);
      while (Menu.bancoPath.length > 1) {
        this.showMenu();
        option = await ask("Opcao empresa: ");
        if (option == "s") {
          Menu.bancoPath.splice(1, 1);
        }
        await ajudaMenu.execute(option);
      }
    }
  }
}
