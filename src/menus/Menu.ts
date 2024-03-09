export abstract class Menu {
  path: string = "";
  static bancoPath: string[] = [];
  abstract showMenu(): void;
}
