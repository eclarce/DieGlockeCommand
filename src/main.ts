import { AjudaMenu } from "./menus/AjudaMenu";
import { CategoriaMainMenu } from "./menus/CategoriaMainMenu";
import { ContaMainMenu } from "./menus/ContaMainMenu";
import { EmpresaMainMenu } from "./menus/EmpresaMainMenu";
import { MainMenu } from "./menus/MainMenu";
import { PessoaMainMenu } from "./menus/PessoaMainMenu";

// MENUS: MOSTRAM TEXTO
// INPUT: OBTEM DADO DO USUARIO
// ACAO: EXECUTA ALGO COM OS DADOS BASEADO NO MENU CORRENTE

async function main() {
  console.log("Die Glocke V.2 - Strataemontanus");
  const mainMenu = new MainMenu({ quitKey: "q" });

  await mainMenu.execute();

  //
  // main -> Cria MainMenu e seus SubMenus -> execute MainMenu.execute
  //  -> MainMenu.execute (loop ate quit key)
  //    -> checa por keys de subMenus e commands
  //    -> executa subMenu ou Command se encontrar a key cadastrada
  //    -> se for quikey
  //      -> retorna um nivel (no caso PessoaMainMenu.execute (volta para) -> Menu.execute)
  //
  console.log("*** Programa terminou ***");
  process.exit(0);
}

main();
