import express from "express";

import { listarAlunos } from "./controllers/listarAlunos.js";
import { mostrarAluno } from "./controllers/mostrarAluno.js";
import { adicionarAluno } from "./controllers/adicionarAluno.js";
import { excluirAluno } from "./controllers/excluirAluno.js";
import { substituirAluno } from "./controllers/substituirAluno.js";
import { atualizarAluno } from "./controllers/atualizarAluno.js";

import { validarRequisicao } from "./middleware/validarRequisicao.js";
import { validarCadastroAluno } from "./middleware/validarCadastroAluno.js";
import { validarCurso } from "./middleware/validarCurso.js";
import { validarAtualizacaoCadastro } from "./middleware/validarAtualizacaoCadastro.js";

export const roteador = express();

roteador.get("/alunos", listarAlunos);
roteador.get("/alunos/:id", validarRequisicao, mostrarAluno);
roteador.post("/alunos", validarCadastroAluno, validarCurso, adicionarAluno);
roteador.delete("/alunos/:id", validarRequisicao, excluirAluno);
roteador.put("/alunos/:id", validarRequisicao, validarCadastroAluno, validarCurso, substituirAluno);
roteador.patch("/alunos/:id", validarRequisicao, validarAtualizacaoCadastro, validarCurso, atualizarAluno);

