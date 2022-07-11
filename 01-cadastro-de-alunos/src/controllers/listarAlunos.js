import { bancoDeDados } from "../data/alunos.js"

const alunos = bancoDeDados.alunos;

export const listarAlunos = (req, res) => {
    return res.status(200).json(alunos);
};

