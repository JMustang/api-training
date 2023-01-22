import User from "../models/user";
import database from "./database";

const usersRepository = {
  create: (user: User, callback: (id?: number) => void) => {
    const sql = `INSERT INTO users (name, lastname, working) VALUES (?, ?, ?)`;
    const params = [user.name, user.lastname, user.working];
    database.run(sql, params, function (_err) {
      callback(this?.lastID);
    });
  },
  readAll: (callback: (user: User[]) => void) => {
    const sql = `SELECT * FROM users`;
    database.all(sql, [], (_err, rows) => callback(rows || []));
  },
  readById: (id: number, callback: (user?: User) => void) => {
    const sql = `SELECT * FROM users WHERE id = ?`;
    database.get(sql, [id], (_err, rows) => callback(rows));
  },
  update: (id: number, user: User, callback: (notFound: boolean) => void) => {
    const sql = `UPDATE users SET name = ? lastname = ? working = ? WHERE id = ?`;
    const params = [user.name, user.lastname, user.working, id];
    database.run(sql, params, function (_err) {
      callback(this.changes === 0);
    });
  },
};

export default usersRepository;
