import sqlite3 from "sqlite3";

const CONN = "data.sqlite";

const SQL_USERS_CREATE = `
    CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        lastname TEXT,
        working BOOLEAN
    )`;

const database = new sqlite3.Database(CONN, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log("Base de dados conectada com sucesso!");
    database.run(SQL_USERS_CREATE, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Tabela users crada com sucesso!");
      }
    });
  }
});

export default database;
