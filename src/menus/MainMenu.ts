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
let flag: boolean = false;
let option: string = "";
export class MainMenu extends Menu {
  public showMenu() {
    console.log(`Action:`, MainMenu.name);
    console.log("==============================");
    console.log("Pessoa                     [p]");
    console.log("Conta                      [c]");
    console.log("Empresa                    [e]");
    console.log("Categoria                  [g]");
    console.log("==============================");
    console.log("Sair [q]");
  }

  async execute() {
    while (option != "q") {
      this.showMenu();
      option = await ask("Escolha opcao: ");
      await pessoaMainMenu.execute(option);
      await contaMainMenu.execute(option);
      await empresaMenu.execute(option);
      await categoriaMenu.execute(option);
    }
  }
}
