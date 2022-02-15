const express = require("express");

const consultarLivros = require("./controllers/consultarLivros");
const mostrarLivro = require("./controllers/mostrarLivro");
const adicionarLivro = require("./controllers/adicionarLivro");
const substituirLivro = require("./controllers/substituirLivro");
const atualizarLivro = require("./controllers/atualizarLivro");

const roteador = express();

roteador.get("/livros", consultarLivros);
roteador.get("/livros/:id", mostrarLivro);

roteador.post("/livros", adicionarLivro);

roteador.put("/livros/:id", substituirLivro);

roteador.patch("/livros/:id", atualizarLivro);

module.exports = roteador;
