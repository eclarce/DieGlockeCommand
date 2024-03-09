import { ask } from "../prompts/prompt";
import { Menu } from "./Menu";
let option: string = "";
let currentPath: string = "";
export class AjudaMenu extends Menu {
  showMenu() {
    console.log(`Action:`, AjudaMenu.name);
    console.log("==============================");
    console.log("MENU SIMBOLICO AJUDA");
    console.log("MENU SIMBOLICO AJUDA");
    console.log("MENU SIMBOLICO AJUDA");
    console.log("==============================");
    console.log("Sair [s]");
  }

//   async execute(s: string) {
//     if (s == "a") {
//       this.path = "ajuda";
//       currentPath = this.path;
//       Menu.paths.push(currentPath);
//       while (Menu.paths.length > 2) {
//         this.showMenu();
//         option = await ask("Opcao ajuda: ");
//         if (option == "s") {
//           Menu.paths.splice(2, 1);
//         }
//       }
//     }
//   }
}
