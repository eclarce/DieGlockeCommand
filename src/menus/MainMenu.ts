import { Menu } from "./Menu";


export class MainMenu extends Menu {
  public showMenu() {
    console.log("==============================");
    console.log("Pessoa                     [p]");
    console.log("Conta                      [c]");
    console.log("Empresa                    [e]");
    console.log("Categoria                  [g]");
    console.log("==============================");
    console.log("Sair [q]");
  }

}
