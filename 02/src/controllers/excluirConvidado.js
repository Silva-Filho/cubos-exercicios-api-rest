let { convidados } = require("../data/bancoDeDados");

const excluirConvidado = (req, res) => {
    const { nome } = req.params;

    const convidado = convidados.find( elemento => {
        return elemento === nome;
    });

    if (!convidado) {
        return res.json(
            {
                mensagem: "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido."
            }
        );
    }

    const indice = convidados.findIndex(elemento => {
        return elemento === nome;
    });

    convidados.splice(indice, 1);

    return res.json(
        {
            mensagem: "Convidado removido."
        }
    );
};

module.exports = excluirConvidado;
