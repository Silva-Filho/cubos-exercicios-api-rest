const { livros } = require("../data/bancoDeDados");
let { identificadorLivro } = require("../data/bancoDeDados");

const adicionarLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body;

    const livro = {
        id: identificadorLivro++,
        titulo,
        autor,
        ano,
        numPaginas
    }

    livros.push(livro);

    return res.json(livro);
};

module.exports = adicionarLivro;
