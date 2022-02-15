const { convidados } = require("../data/bancoDeDados");

const adicionarConvidado = (req, res) => {
    const { nome } = req.body;
    const nomeJaAdicionado = convidados.includes(nome);

    if (!nomeJaAdicionado) {
        convidados.push(nome);
        return res.json(
            {
                mensagem: "Convidado adicionado."
            }
        );
    } else {
        return res.json(
            {
                mensagem: "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."
            }
        );
    }
};

module.exports = adicionarConvidado;
