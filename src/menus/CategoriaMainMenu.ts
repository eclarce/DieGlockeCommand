import { ask } from "../prompts/prompt";
import { Menu } from "./Menu";
let option: string = "";
export class CategoriaMainMenu extends Menu {
  showMenu() {
    console.log(`Action:`, CategoriaMainMenu.name);

    console.log("==============================");
    console.log("Cadastrar categoria        [c]");
    console.log("Ver categorias cadastradas [t]");
    console.log("Pesquisar categorias       [p]");
    console.log("Editar categorias          [e]");
    console.log("==============================");
    console.log("Sair [s]");
  }

  async execute(s: string) {
    if (s == "g") {
      while (option != "s") {
        this.showMenu();
        option = await ask("Opcao categoria: ");
      }
    }
  }
}
