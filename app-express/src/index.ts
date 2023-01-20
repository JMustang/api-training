import express from "express";
import cors from "cors";
import usersRouter from "./routers/user.router";

// Porta do servidor
const PORT = process.env.PORT || 4000;

// Host do servidor
const HOSTNAME = process.env.HOSTNAME || "http://localhost";

// App express
const app = express();

// JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint raiz
app.get("/", (req, res) => {
  res.send("Hello World!!");
});

// Cors
app.use(
  cors({
    origin: ["http://localhost:3000", "*"],
  })
);

// Routers
app.use("/api", usersRouter);

// Resposta padrao para qualquer outra requisicao
app.use((req, res) => {
  res.status(404).json({ Error: "Page not found!" });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server listening on ${HOSTNAME}:${PORT}`);
});
