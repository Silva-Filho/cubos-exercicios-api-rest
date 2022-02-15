const express = require("express");

const listarConvidados = require("./controllers/listarConvidados");
const adicionarConvidado = require("./controllers/adicionarConvidado");
const excluirConvidado = require("./controllers/excluirConvidado");

const roteador = express();

roteador.get("/convidados", listarConvidados);
roteador.post("/convidados", adicionarConvidado);
roteador.delete("/convidados/:nome", excluirConvidado);

module.exports = roteador;
