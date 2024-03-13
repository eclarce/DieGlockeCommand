import { Menu } from "./Menu";
// let option: string = "";
// let currentPath: string = "";
// const ajudaMenu = new AjudaMenu();
export class CategoriaMainMenu extends Menu {
  setupSubMenus(): void {}
  setupCommands(): void {
    // todo commands categoria
  }
  showMenu() {
    console.log("Cadastrar categoria        [c]");
    console.log("Ver categorias cadastradas [t]");
    console.log("Pesquisar categorias       [p]");
    console.log("Editar categorias          [e]");
  }
}
