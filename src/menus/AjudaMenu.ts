import { ask } from "../prompts/prompt";
import { Menu } from "./Menu";
let option: string = "";
let currentPath: string = "";
export class AjudaMenu extends Menu {
  showMenu() {
    console.log(`Action:`, AjudaMenu.name);
    console.log(Menu.bancoPath);
    console.log("==============================");
    console.log("MENU SIMBOLICO AJUDA");
    console.log("MENU SIMBOLICO AJUDA");
    console.log("MENU SIMBOLICO AJUDA");
    console.log("==============================");
    console.log("Sair [s]");
  }

  async execute(s: string) {
    if (s == "a") {
      this.path = "ajuda";
      currentPath = this.path;
      Menu.bancoPath.push(currentPath);
      while (Menu.bancoPath.length > 2) {
        this.showMenu();
        option = await ask("Opcao ajuda: ");
        if (option == "s") {
          Menu.bancoPath.splice(2, 1);
        }
      }
    }
  }
}
