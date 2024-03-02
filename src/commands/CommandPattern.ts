/**
 * The Command interface declares a method for executing a command.
 */
import { ask } from "../prompts/prompt";
import PessoaService from "../services/PessoaService";
import ContaService from "../services/ContaService";
import ActionsPessoa from "./ActionsPessoa";
import ActionsConta from "./ActionsConta";
const pessoaService = new PessoaService();
const contaService = new ContaService();
const actionPessoa = new ActionsPessoa();
const actionConta = new ActionsConta();
import {
  showMenuPrincipal,
  showTitle,
  showMenuPessoa,
  showMenuConta,
  showMenuCategoria,
  showMenuEmpresa,
} from "../menus/telas";

let option: string = "";

const opcoesPessoa = {
  p: "pessoa",
  c: "conta",
  e: "empresa",
  g: "categoria",
};
interface Command {
  execute(): Promise<void>;
}

/**
 * Some commands can implement simple operations on their own.
 */
export class SimpleCommandPessoa implements Command {
  private payload: string;
  constructor(payload: string) {
    this.payload = payload;
  }

  public async execute(): Promise<void> {
    if (this.payload == "p") {
      await showMenuPessoa();
      // await ask("Opcao pessoa: ")
      // while (this.payload != "s") {
      //   console.log("entrei here")
      //   // await showMenuPessoa();
      //   // option = await ask("Opcao pessoa: ")
      // }
    }
    console.log("entrei aqui...");
    option = await ask("Opcao person: ");
    console.log("\n");
  }
}

export class SimpleCommandConta implements Command {
  private payload: string;

  constructor(payload: string) {
    this.payload = payload;
  }

  public async execute() {
    console.log(this.payload + "\n");
    showMenuConta();
  }
}

export class DetectOption implements Command {
  private payload: string;
  constructor(payload: string) {
    this.payload = payload;
  }

  public async execute() {}
}

/**
 * However, some commands can delegate more complex operations to other objects,
 * called "receivers."
 */
export class ComplexCommand implements Command {
  private receiver: Receiver;

  /**
   * Context data, required for launching the receiver's methods.
   */
  private a: string;

  private b: string;

  /**
   * Complex commands can accept one or several receiver objects along with
   * any context data via the constructor.
   */
  constructor(receiver: Receiver, a: string, b: string) {
    this.receiver = receiver;
    this.a = a;
    this.b = b;
  }

  /**
   * Commands can delegate to any methods of a receiver.
   */
  public async execute() {
    // console.log(
    //   "ComplexCommand: Complex stuff should be done by a receiver object."
    // );
    this.receiver.doSomething(this.a);
    this.receiver.doSomethingElse(this.b);
  }
}

/**
 * The Receiver classes contain some important business logic. They know how to
 * perform all kinds of operations, associated with carrying out a request. In
 * fact, any class may serve as a Receiver.
 */
export class Receiver {
  public doSomething(a: string): void {
    // console.log(`Receiver: Working on (${a}.)`);
    // actionPessoa.iniciaMostraPessoa();
  }

  public doSomethingElse(b: string): void {
    // console.log(`Receiver: Also working on (${b}.)`);
    // actionConta.iniciaMostraContas();
  }
}

/**
 * The Invoker is associated with one or several commands. It sends a request to
 * the command.
 */
export default class Invoker {
  private onStart!: Command;

  // private onFinish!: Command;

  /**
   * Initialize commands.
   */
  public async setOnStart(command: Command): Promise<void> {
    this.onStart = command;
  }

  // public setOnFinish(command: Command): void {
  //   this.onFinish = command;
  // }

  /**
   * The Invoker does not depend on concrete command or receiver classes. The
   * Invoker passes a request to a receiver indirectly, by executing a
   * command.
   */
  public async doSomethingImportant(): Promise<void> {
    // console.log("Invoker: Does anybody want something done before I begin?");
    if (this.isCommand(this.onStart)) {
     await this.onStart.execute();
    }

    // console.log("Invoker: ...doing something really important...");

    // console.log("Invoker: Does anybody want something done after I finish?");
    // if (this.isCommand(this.onFinish)) {
    //   this.onFinish.execute();
    // }
  }

  private isCommand(object: Command): object is Command {
    return object.execute !== undefined;
  }
}
