import express from "express";
import cors from "cors";

// Porta do servidor
const PORT = process.env.PORT || 4000;

// Host do servidor
const HOSTNAME = process.env.HOSTNAME || "http://localhost";

// App express
const app = express();

// Endpoint raiz
app.get("/", (req, res) => {
  res.send("Hello World!!");
});

// Cors
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

// Resposta padrao para qualquer outra requisicao
app.use((req, res) => {
  res.status(404).json({ Error: "Page not found!" });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server listening on ${HOSTNAME}:${PORT}`);
});
