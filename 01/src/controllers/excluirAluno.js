import { bancoDeDados } from "../data/alunos.js"

let alunos = bancoDeDados.alunos;

export const excluirAluno = (req, res) => {
    const { id } = req.params;
    const idNumero = Number(id);
    
    const aluno = alunos.find( elemento => {
        return elemento.id === idNumero;
    } );

    const alunoIndice = alunos.findIndex( elemento => {
        return elemento.id === idNumero;
    } );

    /* const novosAlunos = alunos.filter( elemento => {
        console.log(elemento.id, idNumero);
        return elemento.id !== idNumero;
    } ); */
    /* alunos = novosAlunos; */
    /* bancoDeDados.alunos = novosAlunos; */

    alunos.splice(alunoIndice, 1);

    return res.status(200).json(aluno);
};

