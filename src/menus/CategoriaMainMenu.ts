import { ask } from "../prompts/prompt";
import { Menu } from "./Menu";
import { AjudaMenu } from "./AjudaMenu";
let option: string = "";
let currentPath: string = "";
const ajudaMenu = new AjudaMenu();
export class CategoriaMainMenu extends Menu {
  showMenu() {
    console.log(`Action:`, CategoriaMainMenu.name);
    console.log(Menu.bancoPath);
    console.log("==============================");
    console.log("Cadastrar categoria        [c]");
    console.log("Ver categorias cadastradas [t]");
    console.log("Pesquisar categorias       [p]");
    console.log("Editar categorias          [e]");
    console.log("==============================");
    console.log("Ajuda [a]");
    console.log("Sair  [s]");
  }

  async execute(s: string) {
    if (s == "g") {
      this.path = "categoria";
      currentPath = this.path;
      Menu.bancoPath.push(currentPath);
      while (Menu.bancoPath.length > 1) {
        this.showMenu();
        option = await ask("Opcao categoria: ");
        if (option == "s") {
          Menu.bancoPath.splice(1, 1);
        }
        await ajudaMenu.execute(option);
      }
    }
  }
}
