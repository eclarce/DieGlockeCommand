import Categoria from "../entity/Categoria";
import { ask } from "../prompts/prompt";
import { CategoriaMainMenu } from "./CategoriaMainMenu";
import { ContaMainMenu } from "./ContaMainMenu";
import { EmpresaMainMenu } from "./EmpresaMainMenu";
import { Menu } from "./Menu";
import { PessoaMainMenu } from "./PessoaMainMenu";

const pessoaMainMenu = new PessoaMainMenu();
const contaMainMenu = new ContaMainMenu();
const categoriaMenu = new CategoriaMainMenu();
const empresaMenu = new EmpresaMainMenu();
let option: string = "";
export class MainMenu extends Menu {
  public showMenu() {
    console.log(`Action:`, MainMenu.name);
    console.log(Menu.bancoPath);
    console.log("==============================");
    console.log("Pessoa                     [p]");
    console.log("Conta                      [c]");
    console.log("Empresa                    [e]");
    console.log("Categoria                  [g]");
    console.log("==============================");
    console.log("Sair [q]");
  }

  async execute() {
    this.path = "main";
    const currentPath = this.path;
    Menu.bancoPath.push(currentPath);
    while (Menu.bancoPath.length > 0) {
      this.showMenu();
      option = await ask("Escolha opcao: ");
      if (option == "q") {
        Menu.bancoPath.splice(0, 1);
      }
      await pessoaMainMenu.execute(option);
      await contaMainMenu.execute(option);
      await empresaMenu.execute(option);
      await categoriaMenu.execute(option);
    }
  }
}
