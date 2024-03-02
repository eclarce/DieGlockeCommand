import { ask } from "../prompts/prompt";
import { Menu } from "./Menu";
let option: string = "";
export class EmpresaMainMenu extends Menu {
  showMenu() {
    console.log(`Action:`, EmpresaMainMenu.name);

    console.log("==============================");
    console.log("Cadastrar empresa          [c]");
    console.log("Ver empresas cadastradas   [t]");
    console.log("Pesquisar empresas         [p]");
    console.log("Editar empresas            [e]");
    console.log("==============================");
    console.log("Sair [s]");
  }

  async execute(s: string) {
    if (s == "e") {
      while (option != "s") {
        this.showMenu();
        option = await ask("Opcao empresa: ");
      }
    }
  }
}
