import { EmpresaMainMenu } from "./menus/EmpresaMainMenu";
import { MainMenu } from "./menus/MainMenu";
import { PessoaMainMenu } from "./menus/PessoaMainMenu";
// MENUS: MOSTRAM TEXTO
// INPUT: OBTEM DADO DO USUARIO
// ACAO: EXECUTA ALGO COM OS DADOS BASEADO NO MENU CORRENTE

async function main() {
  console.log("Die Glocke V.2 - strataemontanus");
  console.log("==============================");
  const mainMenu = new MainMenu({ quitKey: "q" });
  mainMenu.addSubMenu(new PessoaMainMenu({ key: "p", quitKey: "s" }));
  mainMenu.addSubMenu(new EmpresaMainMenu({ key: "e", quitKey: "s" }));
  await mainMenu.execute();

  console.log("Programa terminou");
  process.exit(0);
}

main();
