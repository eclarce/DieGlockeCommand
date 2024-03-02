import { ask } from "../prompts/prompt";
import { Menu } from "./Menu";
import ActionsConta from "../commands/ActionsConta";
const actionsConta = new ActionsConta();
let option: string = "";
export class ContaMainMenu extends Menu {
  showMenu() {
    console.log(`Action:`, ContaMainMenu.name);

    console.log("==============================");
    console.log("Cadastrar conta            [c]");
    console.log("Ver contas cadastradas     [t]");
    console.log("Editar contas              [e]");
    console.log("Pesquisar contas           [p]");
    console.log("==============================");
    console.log("Sair [s]");
  }

  async execute(s: string) {
    if (s == "c") {
      while (option != "s") {
        this.showMenu();
        option = await ask("Opcao conta: ");
        await actionsConta.iniciaCadastroConta(option);
        await actionsConta.iniciaMostraContas(option);
        await actionsConta.iniciaEdicaoConta(option);
        await actionsConta.iniciaPesquisaConta(option);
      }
    }
  }
}
