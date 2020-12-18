const Crianca = require('../models/crianca');
const status = require('http-status');

exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const dataNasc = req.body.dataNasc;
    const sexo = req.body.sexo;
    const grauParentesco = req.body.grauParentesco;
    const corOlho = req.body.corOlho;
    const corCabelo = req.body.corCabelo;
    const tipoCabelo = req.body.tipoCabelo;
    const tomPele = req.body.tomPele;
    const observacao = req.body.observacao;
    const qrcodeId = req.body.qrcodeId;

    Crianca.Create({
        nome: nome,
        dataNasc: dataNasc,
        sexo: sexo,
        grauParentesco: grauParentesco,
        corOlho: corOlho,
        corCabelo: corCabelo,
        tipoCabelo: tipoCabelo,
        tomPele: tomPele,
        observacao: observacao,
        qrcodeId: qrcodeId
    })
    .then(crianca => {
        if(crianca){
            res.status(status.OK).send(crianca);
        } else {
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
}