const roteador = require("./routes");

const express = require("express");

const servidor = express();

const porta = 3000;

servidor.use(express.json());
servidor.use(roteador);

servidor.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});
