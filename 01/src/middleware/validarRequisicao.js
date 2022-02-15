import { bancoDeDados } from "../data/alunos.js";

const alunos = bancoDeDados.alunos;

export const validarRequisicao = (req, res, next) => {
    const { id } = req.params;
    const idNumero = Number(id);

    const aluno = alunos.find( elemento => {
        return elemento.id === idNumero;
    } );

    if (!idNumero) {
        return res.status(400).json(
                {
                    mensagem: "Erro 400: id informado não é um número."
                }
            );
    }

    if (!aluno) {
        return res.status(404).json(
            {
                mensagem: "Erro 404: aluno não encontrado."
            }
        );
    }

    next();
};

