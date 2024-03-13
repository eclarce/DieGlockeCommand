import { Command } from "../commands/Command";
import { ask } from "../prompts/prompt";
import { MainMenu } from "./MainMenu";
import { AjudaMenu } from "./AjudaMenu";

export type CommandEntry = {
  command: Command;
  key: string;
};
export abstract class Menu {
  public key?: string = "";
  public quitKey: string = "q";
  private subMenus: Menu[] = [];

  private commands: CommandEntry[] = [];

  private prompt: string = "Escolha a opcao: ";
  private option: string = "";

  abstract showMenu(): void;
  abstract setupCommands(): void;
  abstract setupSubMenus(): void;

  constructor(params: { quitKey: string; prompt?: string; key?: string }) {
    // console.log(`CRIANDO OBJETO CLASSE ${this.constructor.name}`)
    this.key = params.key;
    this.quitKey = params.quitKey;
    this.prompt = params.prompt || this.prompt;
    this.setupCommands();
    this.setupSubMenus();

  }

  async execute() {
    let menuToExecute: Menu | null = null;
    let commandToExecute: CommandEntry | null = null;

    // Executa o menu corrente ate a quit key ser usada
    while (true) {
      console.log("==============================");
      this.showMenu();
      console.log(`Voltar                     [${this.quitKey}]`);
      console.log("==============================");

      this.option = await ask(this.prompt);

      // Se option for o quit key terminar esse loop e voltar para o
      // menu anterior.
      if (this.option === this.quitKey) {
        return;
      }

      // Verifica se tem algum menu com a key obtida
      for (const sub of this.subMenus) {
        if (sub.key === this.option) menuToExecute = sub;
      }

      // Verifica se tem algum command com a key
      for (const cmdEntry of this.commands) {
        if (cmdEntry.key === this.option) commandToExecute = cmdEntry;
      }

      try {
        // Se tiver menu executa o menu
        if (menuToExecute) await menuToExecute.execute();
        // Se nao tiver mas tiver command executa o command
        else if (commandToExecute) await commandToExecute.command.execute();
      } catch (err) {
        console.log(`Erro: ${err}`);
      }
    }
  }

  addCommand(command: Command, key: string) {
    this.commands.push({
      command: command,
      key: key,
    });
  }

  addSubMenu(subMenu: Menu) {
    this.subMenus.push(subMenu);
  }
}
