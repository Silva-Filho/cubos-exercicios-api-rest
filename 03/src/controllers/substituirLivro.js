const { livros } = require("../data/bancoDeDados");


const substituirLivro = (req, res) => {
    const { id } = req.params;
    const idNumero = Number(id);
    const { titulo, autor, ano, numPaginas } = req.body;

    const livro = livros.find( elemento => {
            return elemento.id === idNumero;
        }
    );

    if (!livro) {
        return res.json(
            {
                "mensagem": "Não existe livro a ser substituído para o ID informado."
            }
        );
    }

    livro.titulo = titulo;
    livro.autor = autor;
    livro.ano = ano;
    livro.numPaginas = numPaginas;

    return res.json(
        {
            "mensagem": "Livro substituído."
        }
    );
};

module.exports = substituirLivro;
