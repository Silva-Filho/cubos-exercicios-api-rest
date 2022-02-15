import { validarCurso } from "./validarCurso.js";

export const validarAtualizacaoCadastro = (req, res, next) => {
    const { nome, sobrenome, idade, curso } = req.body;

    if (idade < 18) {
        return res.status(400).json( 
            {
                mensagem: "Erro 400: idade do aluno é menor que 18 anos."
            }
        );
    }

    if (nome !== undefined) {
        if (!nome.trim()) {
            return res.status(400).json( 
                {
                    mensagem: "Erro 400: A informação nome deve ser corretamente preenchida."
                }
            );
        }
    }    

    if (sobrenome !== undefined) {
        if (!sobrenome.trim()) {
            return res.status(400).json( 
                {
                    mensagem: "Erro 400: A informação sobrenome deve ser corretamente preenchida."
                }
            );
        }
    }

    if (curso !== undefined) {
        if (!curso.trim()) {
            return res.status(400).json( 
                {
                    mensagem: "Erro 400: A informação curso deve ser corretamente preenchida."
                }
            );
        } /* else {
            return res.send(validarCurso());
        } */
    }
    /* if (!curso.trim()) {
        return res.status(400).json( 
            {
                mensagem: "Erro 400: A informação curso deve ser corretamente preenchida."
            }
        );
    } else {
        validarCurso();
    } */
    
    /* if (cursoInformado) {
        validarCurso();
    } */

    next();
};

