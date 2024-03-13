import { Menu } from "./Menu";
// let option: string = "";
// let currentPath: string = "";
// const ajudaMenu = new AjudaMenu();
export class EmpresaMainMenu extends Menu {
  setupSubMenus(): void {}
  setupCommands(): void {
    // todo commands empresa
  }
  showMenu() {
    console.log("Cadastrar empresa          [c]");
    console.log("Ver empresas cadastradas   [t]");
    console.log("Pesquisar empresas         [p]");
    console.log("Editar empresas            [e]");
  }
}
