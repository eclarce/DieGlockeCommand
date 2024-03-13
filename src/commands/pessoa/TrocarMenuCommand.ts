import { Command } from "../Command";
import { AjudaMenu } from "../../menus/AjudaMenu";

export default class TrocarMenuCommand implements Command {
  async execute() {
    const ajudaMenu = new AjudaMenu({ quitKey: "s" });
    ajudaMenu.addSubMenu(new AjudaMenu({ key: "a", quitKey: "s" }));
    await ajudaMenu.execute();
  }
}
