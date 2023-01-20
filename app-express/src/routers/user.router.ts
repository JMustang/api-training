import express from "express";

const usersRouter = express.Router();

usersRouter.post("/users", (req, res) => {
  res.send("cria novo usuario!");
});

usersRouter.get("/users", (req, res) => {
  res.send("Le todos os usuario!");
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
