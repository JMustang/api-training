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
        .send({ message: "Created successfully!", user: user });
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
  usersRepository.readById(id, (users) => {
    if (users) {
      res.json(users);
    } else {
      res.status(404).send({ error: `User ${id} not found.` });
    }
  });
});

usersRouter.put("/users/:id", (req, res) => {
  const id: number = +req.params.id;
  usersRepository.update(id, req.body, (notFound) => {
    if (notFound) {
      res.status(404).json({ error: `User ${req.body}, not found` });
    } else {
      res.status(204).json({ message: `User ${req.body}, updated` });
    }
  });
});

usersRouter.delete("/users/:id", (req, res) => {
  const id: number = +req.params.id;
  usersRepository.delete(id, (notFound) => {
    if (notFound) {
      res.status(404).send({ error: `User ${id}, not found.` });
    } else {
      res.status(204).send({ error: `User ${id}, deleted.` });
    }
  });
});

export default usersRouter;
