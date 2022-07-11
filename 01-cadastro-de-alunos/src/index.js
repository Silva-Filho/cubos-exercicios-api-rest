import express from "express";

import { validarSenha } from "./middleware/validarSenha.js";
import { roteador } from "./routes.js";

const servidor = express();

const porta = 3000;

servidor.use(validarSenha);
servidor.use(express.json());
servidor.use(roteador);

servidor.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});

/* "type": "module", */