import { ask } from "../prompts/prompt"

export abstract class Menu {
  private key?: string = ''
  private quitKey: string = 'q'
  private subMenus: Menu[] = []
  private prompt: string = 'Escolha a opcao: '
  private option: string = ''

  abstract showMenu(): void;


  async execute() {
    this.showMenu();
    this.option = await ask(this.prompt);
    for (const sub of this.subMenus) {
      if (sub.key === this.option) await sub.execute()
    }
  }

  addSubMenu(subMenu: Menu) {
    this.subMenus.push(subMenu)
  }
  

  constructor(params : { quitKey: string, prompt?:string ,key?: string}) {
    this.key = params.key;
    this.quitKey = params.quitKey
    this.prompt = this.prompt
  }
}
