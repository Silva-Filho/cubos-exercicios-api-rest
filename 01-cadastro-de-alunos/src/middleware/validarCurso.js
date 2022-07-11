import { cursos } from "../data/cursos.js";

export const validarCurso = (req, res, next) => {
    const { curso } = req.body;

    /* const algo = alunos.find( elemento => {

    } ); */
    const cursoInformado = cursos.find( elemento => {
        return elemento === curso;
    } );

    if (!cursoInformado) {
        return res.status(404).json(
            {
                mensagem: "Erro 404: O curso informado não consta na lista de cursos ofertados."
            }
        );
    }

    next();
};

