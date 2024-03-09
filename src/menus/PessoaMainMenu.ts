import ActionsPessoa from "../commands/ActionsPessoa";
import { AjudaMenu } from "./AjudaMenu";
import { Menu } from "./Menu";
// const actionsPessoa = new ActionsPessoa();
// let option: string = "";
// let currentPath: string = "";
// const ajudaMenu = new AjudaMenu();

export class PessoaMainMenu extends Menu {
  showMenu() {
  
    console.log("==============================");
    console.log("Cadastrar pessoa           [c]");
    console.log("Ver pessoas cadastradas    [t]");
    console.log("Editar pessoas             [e]");
    console.log("Pesquisar pessoas          [p]");
    console.log("==============================");
    console.log("Ajuda [a]");
    console.log("Sair  [s]");
  }

  // async execute(s: string) {
  //   if (s == "p") {
  //     this.path = "conta";
  //     currentPath = this.path;
  //     Menu.paths.push(currentPath);
  //     while (Menu.paths.length > 1) {
  //       this.showMenu();
  //       option = await ask("Opcao pessoa: ");
  //       if (option == "s") {
  //         Menu.paths.splice(1, 1);
  //       }
  //       await ajudaMenu.execute(option);
  //       await actionsPessoa.iniciaCadastroPessoa(option);
  //       await actionsPessoa.iniciaMostraPessoa(option);
  //       await actionsPessoa.iniciaEdicaoPessoa(option);
  //       await actionsPessoa.iniciaPesquisaPessoa(option);
  //     }
  //   }
  // }
}
