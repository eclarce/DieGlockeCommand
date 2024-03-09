import { MainMenu } from "./menus/MainMenu";
// MENUS: MOSTRAM TEXTO
// INPUT: OBTEM DADO DO USUARIO
// ACAO: EXECUTA ALGO COM OS DADOS BASEADO NO MENU CORRENTE

async function main() {
  console.log("Die Glocke V.2 - strataemontanus");
  console.log("==============================");
  await new MainMenu().execute();
  console.log("Programa terminou");
  process.exit(0);
}

main();
