const { convidados } = require("../data/bancoDeDados");

const listarConvidados = (req, res) => {
    const { nome } = req.query;
    const nomePesquisado = convidados.includes(nome);

    if (!nome) {
        return res.json(convidados);
    }
    
    if (nomePesquisado) {
        return res.json(
            {
                mensagem: "Convidado presente."
            }
        );
    } else {
        return res.json(
            {
                mensagem: "O convidado buscado não está presente na lista."
            }
        );
    }
};

module.exports = listarConvidados;
