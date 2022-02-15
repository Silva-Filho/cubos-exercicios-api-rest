const { livros } = require("../data/bancoDeDados");

const mostrarLivro = (req, res) => {
    const { id } = req.params;
    const idNumero = Number(id);

    if (!idNumero) {
        return res.json(
            {
                mensagem: "O valor do parâmetro ID da URL não é um número válido."
            }
        );
    } else if (id > livros.length) {
        return res.json(
            {
                mensagem: "Não existe livro para o ID informado."
            }
        );
    }

    const livro = livros.find( elemento => {
            return elemento.id === idNumero;
        }
    );

    return res.json(livro);
};

module.exports = mostrarLivro;
