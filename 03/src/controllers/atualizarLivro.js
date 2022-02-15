const { livros } = require("../data/bancoDeDados");

const atualizarLivro = (req, res) => {
    const { id } = req.params;
    const idNumero = Number(id);
    const { titulo, autor, ano, numPaginas } = req.body;
    console.log(req.body);
    console.log(autor);

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

    if (titulo) {
        livro.titulo = titulo;
    } else if (autor) {
        livro.autor = autor;
    } else if (ano) {
        livro.ano = ano;
    } else if (numPaginas) {
        livro.numPaginas = numPaginas;
    }

    return res.json(
        {
            "mensagem": "Livro alterado."
        }
    );
};

module.exports = atualizarLivro;
