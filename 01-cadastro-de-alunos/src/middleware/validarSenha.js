export const validarSenha = (req, res, next) => {
    const { senha } = req.query;

    if (!senha) {
        return res.status(401).json(
            {
                mensagem: "Erro 401: a senha deve ser informada."
            }
        );
    } else if (senha !== "cubos123") {
        return res.status(401).json(
            {
                mensagem: "Erro 401: a senha informada está incorreta."
            }
        );
    }

    next();
};

