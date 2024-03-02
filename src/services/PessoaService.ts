
import mysql, { RowDataPacket } from "mysql2/promise";

export default class PessoaService {


  async cadastrar(nome: string, fone: number, endereco: string) {
    try {
      const connection = await mysql.createConnection(
        "mysql://root:r00tr00t@localhost:3306/momo"
      );
      const sql =
        "INSERT INTO `pessoa` (pes_id, pes_nome, pes_telefone, pes_endereco) VALUES (null, ?, ?, ?)";

      const [rows, fields] = await connection.query(sql, [
        nome,
        fone,
        endereco,
      ]);
      // console.log(rows);
      // console.log(fields);
      await connection.end();
    } catch (err) {
      console.log(err);
    }
    console.log("Pessoa cadastrada com sucesso!");
  }
  async exibirTodos() {
    try {
      const connection = await mysql.createConnection(
        "mysql://root:r00tr00t@localhost:3306/momo"
      );
      const sql = "SELECT * FROM `pessoa`";

      const result = await connection.query(sql);

      const rows = result[0];

      console.log(rows);
      await connection.end();
    } catch (err) {
      console.log(err);
    }
  }

  async findPessoa(idParaEncontrar: number) {
    try {
      const connection = await mysql.createConnection(
        "mysql://root:r00tr00t@localhost:3306/momo"
      );
      const sql = "SELECT * FROM PESSOA WHERE pes_id = ?";

      const result = await connection.query(sql, [idParaEncontrar]);
      const rows = result[0] as RowDataPacket[];
      if (rows.length === 0) {
        console.log("*** Pessoa não existe no banco ***");
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

  async removerPessoa(idParaRemover: number) {
    try {
      const connection = await mysql.createConnection(
        "mysql://root:r00tr00t@localhost:3306/momo"
      );
      const sql = "delete from pessoa WHERE pes_id = ?";

      const result = await connection.query(sql, [idParaRemover]);
      console.log("*** Pessoa deletada com sucesso! ***");
      await connection.end();
    } catch (err) {
      console.log(err);
    }
  }

  async replacePessoa(
    id: number,
    nome: string,
    fone: number,
    endereco: string
  ) {
    try {
      const connection = await mysql.createConnection(
        "mysql://root:r00tr00t@localhost:3306/momo"
      );
      let sql: string = "";

      let result: any[] = [];

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

      if (
        isVazioString(nome) &&
        isVazioNumber(fone) &&
        isVazioString(endereco)
      ) {
        console.log("*** Nada encontrado ***");
        await connection.end();
      }
      let hasPreviousSQL = false;
      sql = "update pessoa set ";

      if (!isVazioString(nome)) {
        hasPreviousSQL = true;
        sql += "pes_nome = " + "'" + nome + "'";
      }

      if (!isVazioNumber(fone)) {
        hasPreviousSQL = true;
        if (hasPreviousSQL) sql += ",";
        sql += "pes_telefone = " + fone;
      }

      if (!isVazioString(endereco)) {
        hasPreviousSQL = true;
        if (hasPreviousSQL) sql += ",";
        sql += "pes_endereco = " + "'" + endereco + "'";
      }

      sql += " where pes_id = " + id;
      result = await connection.query(sql);

      const rows = result[0];

      console.log(rows);
      await connection.end();
    } catch (err) {
      console.log(err);
    }
  }

  async searchPessoa(nome: string, fone: number, endereco: string) {
    try {
      const connection = await mysql.createConnection(
        "mysql://root:r00tr00t@localhost:3306/momo"
      );
      let sql: string = "";

      let result: any[] = [];

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

      if (
        isVazioString(nome) &&
        isVazioNumber(fone) &&
        isVazioString(endereco)
      ) {
        console.log("*** Nada encontrado ***");
        await connection.end();
      }
      let hasPreviousSQL = false;
      sql = "select * from pessoa where 1=1 and ";

      if (!isVazioString(nome)) {
        hasPreviousSQL = true;
        sql += "pes_nome like " + "'" + nome + "%" + "'";
      }

      if (!isVazioNumber(fone)) {
        hasPreviousSQL = true;
        if (hasPreviousSQL) sql += "and ";
        sql += "pes_telefone like " + fone;
      }

      if (!isVazioString(endereco)) {
        hasPreviousSQL = true;
        if (hasPreviousSQL) sql += "and ";
        sql += "pes_endereco like " + "'" + endereco + "%" + "'";
      }

      result = await connection.query(sql);

      const rows = result[0];

      console.log(rows);
      await connection.end();
    } catch (err) {
      console.log(err);
    }
  }
}
