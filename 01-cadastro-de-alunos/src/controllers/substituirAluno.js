import { bancoDeDados } from "../data/alunos.js"

let alunos = bancoDeDados.alunos;

export const substituirAluno = (req, res) => {
    const { id } = req.params;
    const idNumero = Number(id);

    const { nome, sobrenome, idade, curso } = req.body;
    
    const aluno = alunos.find( elemento => {
        return elemento.id === idNumero;
    } );

    /* const alunoSubstituido = aluno.map( prop => ); */
    /* aluno = {
        id,
        nome,
        sobrenome,
        idade,
        curso
    } */
    aluno.nome = nome;
    aluno.sobrenome = sobrenome;
    aluno.idade = idade;
    aluno.curso = curso;

    return res.status(201);
};

