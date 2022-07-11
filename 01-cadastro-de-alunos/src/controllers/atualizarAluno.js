import { bancoDeDados } from "../data/alunos.js"

let alunos = bancoDeDados.alunos;

export const atualizarAluno = (req, res) => {
    const { id } = req.params;
    const idNumero = Number(id);

    const { nome, sobrenome, idade, curso } = req.body;
    
    const aluno = alunos.find( elemento => {
        return elemento.id === idNumero;
    } );

    aluno.nome = nome ? nome : aluno.nome;
    aluno.sobrenome = sobrenome ? sobrenome : aluno.sobrenome;
    aluno.idade = idade ? idade : aluno.idade;
    aluno.curso = curso ? curso : aluno.curso;

    return res.status(201).send("Foi.");
};

