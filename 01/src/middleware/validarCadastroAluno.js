export const validarCadastroAluno = (req, res, next) => {
    const { nome, sobrenome, idade, curso } = req.body;

    if (!idade) {
        return res.status(400).json( 
            {
                mensagem: "Erro 400: A informação idade é obrigatória e deve ser corretamente preenchida."
            }
        );
    } else if (idade < 18) {
        return res.status(400).json( 
            {
                mensagem: "Erro 400: idade do aluno é menor que 18 anos."
            }
        );
    }

    if (!nome) {
        return res.status(400).json( 
            {
                mensagem: "Erro 400: A informação nome é obrigatória e deve ser corretamente preenchida."
            }
        );
    } else if (!nome.trim()) {
        return res.status(400).json( 
            {
                mensagem: "Erro 400: A informação nome deve ser corretamente preenchida."
            }
        );
    }

    if (!sobrenome) {
        return res.status(400).json( 
            {
                mensagem: "Erro 400: A informação sobrenome é obrigatória e deve ser corretamente preenchida."
            }
        );
    } else if (!sobrenome.trim()) {
        return res.status(400).json( 
            {
                mensagem: "Erro 400: A informação sobrenome deve ser corretamente preenchida."
            }
        );
    }

    if (!curso) {
        return res.status(400).json( 
            {
                mensagem: "Erro 400: A informação curso é obrigatória e deve ser corretamente preenchida."
            }
        );
    } else if (!curso.trim()) {
        return res.status(400).json( 
            {
                mensagem: "Erro 400: A informação curso deve ser corretamente preenchida."
            }
        );
    }

    next();
};

