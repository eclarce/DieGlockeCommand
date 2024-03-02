import Conta from "../entity/Conta";
import mysql, { RowDataPacket } from "mysql2/promise";

export default class ContaService {
  // private bancoContas: Conta[] = [];

  async cadastrarConta(tipo: string, valor: number) {
    try {
      const connection = await mysql.createConnection(
        "mysql://root:r00tr00t@localhost:3306/momo"
      );
      const sql =
        "INSERT INTO `conta` (cnt_id, cnt_tipo, cnt_valor) VALUES (null, ?, ?)";

      const [rows, fields] = await connection.query(sql, [tipo, valor]);

      // console.log(rows);
      // console.log(fields);
      await connection.end();
    } catch (err) {
      console.log(err);
    }
    console.log("*** Conta cadastrada com sucesso! ***");
  }

  async mostraContas() {
    try {
      const connection = await mysql.createConnection(
        "mysql://root:r00tr00t@localhost:3306/momo"
      );
      const sql = "SELECT * FROM `conta`";

      const result = await connection.query(sql);

      const rows = result[0];

      console.log(rows);
      await connection.end();
    } catch (err) {
      console.log(err);
    }
  }

  async findConta(id: number) {
    try {
      const connection = await mysql.createConnection(
        "mysql://root:r00tr00t@localhost:3306/momo"
      );
      const sql = "SELECT * FROM `conta` where cnt_id = ?";

      const result = await connection.query(sql, [id]);

      const rows = result[0] as RowDataPacket[];
      if (rows.length === 0) {
        console.log("*** Conta não existe no banco ***");
        await connection.end();
        return false;
      } else {
        await connection.end();
        console.log(rows);
        return true;
      }
    } catch (err) {
      console.log(err);
    }
  }
  //   removerConta(idParaRemover: number) {
  //     // findIndex , find, some , filter, etc.. operam com "predicates"
  //     // predicate (predicado "característica inerente a um ser; atributo, propriedade")
  //     // ou seja, se o objeto recebido no callback (a funcao que vc passou)
  //     // retornar "true" o predicado e atendido.
  //     // qualquer expressao que retorne true pode ser usda
  //     // exemplo: objeto.nome == 'vitor' , se isso for true retornara ok

  //     let posEncontrada = -1;

  //     // Forma declarativa funcional
  //     // findIndex, ira chamar a function com o elemento de cada
  //     // posicao dentro dele passando o elemento pelo parametro
  //     // da function.
  //     posEncontrada = this.bancoContas.findIndex(function (itemDoArray) {
  //       // Predicado. Compara o que voce quiser aqui dentro e retorna
  //       // true para terminar o loop que esta acontecendo
  //       //   if (itemDoArray.id == idParaRemover) return true;
  //     });

  //     // Forma classica imperativa
  //     /*    for (let i = 0; i < this.bancoContas.length; i++) {
  //                const conta = this.bancoContas[i]
  //                console.log('posicao=', i, 'elemento=', conta)
  //                if (conta.id == idParaRemover) {
  //                    posEncontrada = i
  //                }
  //            } */

  //     // Se for -1 e porque nao encontrou nada
  //     if (posEncontrada >= 0) this.bancoContas.splice(posEncontrada, 1);
  //   }
  async removeConta(id: number) {
    try {
      const connection = await mysql.createConnection(
        "mysql://root:r00tr00t@localhost:3306/momo"
      );

      const sql = "DELETE FROM `conta` WHERE cnt_id = ?";

      const result = await connection.query(sql, [id]);

      const rows = result[0];

      console.log(rows);
      console.log("*** Conta removida com sucesso! ***");

      // Fechar a conexão
      await connection.end();
    } catch (err) {
      console.log(err);
    }
  }

  async replaceConta(tipo: string, valor: number) {
    try {
      const connection = await mysql.createConnection(
        "mysql://root:r00tr00t@localhost:3306/momo"
      );

      let sql = "";

      function isVazioString(s: string) {
        if (s == "") {
          return true;
        }
      }

      function isVazioNumber(n: number) {
        if (n == 0) {
          return true;
        }

        return false;
      }

      if (isVazioNumber(valor) && isVazioString(tipo) == true) {
        console.log("*** Nada encontrado ***");
        await connection.end();
      }

      let hasPreviousSQL = false;
      sql = "update conta set ";

      if (!isVazioNumber(valor)) {
        hasPreviousSQL = true;
        sql += "cnt_valor = " + valor;
      }

      if (!isVazioString(tipo)) {
        if (hasPreviousSQL) sql += ",";
        sql += "cnt_tipo = " + "'" + tipo + "'";
      }

      const result = await connection.query(sql);

      const rows = result[0];

      console.log(rows);
      console.log("*** Conta substituida com sucesso! ***");

      // Fechar a conexão
      await connection.end();
    } catch (err) {
      console.log(err);
    }
  }

  async searchConta(tipo: string, valor: number) {
    try {
      const connection = await mysql.createConnection(
        "mysql://root:r00tr00t@localhost:3306/momo"
      );

      let sql = "";

      function isVazioString(s: string) {
        if (s == "") {
          return true;
        }
      }

      function isVazioNumber(n: number) {
        if (n == 0) {
          return true;
        }

        return false;
      }

      if (isVazioNumber(valor) && isVazioString(tipo) == true) {
        console.log("*** Nada encontrado ***");
        await connection.end();
      }

      let hasPreviousSQL = false;
      sql = "select * from conta where 1=1 and ";

      if (!isVazioNumber(valor)) {
        hasPreviousSQL = true;
        sql += "cnt_valor like " + valor;
      }

      if (!isVazioString(tipo)) {
        if (hasPreviousSQL) sql += " and ";
        sql += "cnt_tipo like " + "'" + tipo + "%" + "'";
      }

      const result = await connection.query(sql);

      const rows = result[0];

      console.log(rows);
      console.log("*** Conta encontrada com sucesso! ***");

      // Fechar a conexão
      await connection.end();
    } catch (err) {
      console.log(err);
    }
  }

  // findContasPorValor(valor: number) {
  //   let contasEncontradas: Conta[] = [];
  //   this.bancoContas.forEach((conta) => {
  //     if (conta.valor == valor) {
  //       contasEncontradas.push(conta);
  //     }
  //   });

  //   if (contasEncontradas.length != 0) {
  //     console.log(contasEncontradas);
  //   }
  // }
  // depois pago o compilador 10 reais por metodo
  // // Perguntar "Menor valor"
  // Perguntar "Maior valor"
  // pegar os dois valores
  // e pesquisar todas as contas que estao nesse intervalo
  // exemplo:
  // Menor valor: 10
  // Maior valor: 150
  // Se tiver uma conta de 80: encontrará
  // Se tiver uma conta de 190: nao encontrara

  // recebeValor(valorMenor: number, valorMaior: number) {
  //   let encontradas: Conta[] = [];
  //   this.bancoContas.forEach((conta) => {
  //     if (conta.valor! >= valorMenor && conta.valor! <= valorMaior) {
  //       encontradas.push(conta);
  //     }
  //   });
  //   // mostrar apenas as contas dentro do intervalor >=10 e <=100
  //   // console.log('Resultado: ', resultado)
  //   console.log("Resultado", encontradas);
  // }
}
