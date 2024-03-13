import { CategoriaMainMenu } from "./CategoriaMainMenu";
import { ContaMainMenu } from "./ContaMainMenu";
import { EmpresaMainMenu } from "./EmpresaMainMenu";
import { Menu } from "./Menu";
import { PessoaMainMenu } from "./PessoaMainMenu";

export class MainMenu extends Menu {
  setupSubMenus(): void {
    this.addSubMenu(new PessoaMainMenu({ key: "p", quitKey: "s" }));
    this.addSubMenu(new ContaMainMenu({ key: "c", quitKey: "s" }));
    this.addSubMenu(new EmpresaMainMenu({ key: "e", quitKey: "s" }));
    this.addSubMenu(new CategoriaMainMenu({ key: "g", quitKey: "s" }));
  }

  setupCommands(): void {}

  public showMenu() {
    console.log("Pessoa                     [p]");
    console.log("Conta                      [c]");
    console.log("Empresa                    [e]");
    console.log("Categoria                  [g]");
  }
}
