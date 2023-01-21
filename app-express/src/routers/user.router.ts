import express from "express";
import User from "../models/user";
import usersRepository from "../repositories/users.repository";

const usersRouter = express.Router();

usersRouter.post("/users", (req, res) => {
  const user: User = req.body;
  usersRepository.create(user, (id) => {
    if (id) {
      res
        .status(201)
        .location(`/users/${id}`)
        .send({ message: "Created successfully!" });
    } else {
      res.status(400).send({ message: "User not created!", error: true });
    }
  });
});

usersRouter.get("/users", (req, res) => {
  usersRepository.readAll((users) => res.json(users));
});

usersRouter.get("/users/:id", (req, res) => {
  const id: number = +req.params.id;
  res.send(`Le um usuario por ID: ${id}`);
});

usersRouter.put("/users/:id", (req, res) => {
  const id: number = +req.params.id;
  res.send(`Atualiza um usuario por ID: ${id}`);
});

usersRouter.delete("/users/:id", (req, res) => {
  const id: number = +req.params.id;
  res.send(`Deleta um usuario por ID: ${id}`);
});

export default usersRouter;
