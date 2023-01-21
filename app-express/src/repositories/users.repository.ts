import User from "../models/user";
import database from "./database";

const usersRepository = {
  create: (user: User, callback: (id?: number) => void) => {
    const sql = `INSERT INTO users (name, lastname, workiing) VALUES (?, ?, ?)`;
    const params = [user.name, user.lastname, user.working];
    database.run(sql, params, function (_err) {
      callback(this?.lastID);
    });
  },
};

export default usersRepository;
