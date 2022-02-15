import { bancoDeDados } from "../data/alunos.js";

const alunos = bancoDeDados.alunos;

export const mostrarAluno = (req, res) => {
    const { id } = req.params;
    const idNumero = Number(id);

    const aluno = alunos.find( elemento => {
        return elemento.id === idNumero;
    } );
    
    return res.status(200).json(aluno);
};

