import { ask } from "../prompts/prompt";
import { Menu } from "./Menu";

export class PessoaCadastrarAction extends Menu {
  
  showMenu() {
    console.log(`Action:`, PessoaCadastrarAction.name)
    
  }

  async execute() {
    this.showMenu()
    const nome: string = await ask("Nome: ")
    const fone: string = await ask("Telefone: ")
    const endereco: string = await ask("Endereço: ")
  }
}
