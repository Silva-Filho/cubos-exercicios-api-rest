import { bancoDeDados } from "../data/alunos.js";

const alunos = bancoDeDados.alunos;

let identificadorAluno = bancoDeDados.identificadorAluno;

export const adicionarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body;
    
    const aluno = {
        id: identificadorAluno++,
        nome,
        sobrenome,
        idade,
        curso
    }

    alunos.push(aluno);

    return res.status(201);
};

