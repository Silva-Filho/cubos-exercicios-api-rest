const { livros } = require("../data/bancoDeDados");

const consultarLivros = (req, res) => {
    res.send(livros);
};

module.exports = consultarLivros;
