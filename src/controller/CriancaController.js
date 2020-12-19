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

    Crianca.create({
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
exports.SelectAll = (req, res, next)=>{
    Crianca.findAll()
    .then(crianca => {
        if(crianca){
            res.status(status.OK).send(crianca);
        }
    })
    .catch(error => next(error));
}

exports.SelectOne = (req, res, next)=>{
    const id = req.params.id;

    Crianca.findByPk(id)
    .then(crianca =>{
        if(crianca){
            res.status(status.OK).send(crianca);
        } else {
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));

}
exports.Update = (req, res, next) => {
    const id = req.params.id;
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

    Crianca.findByPk(id)
        .then(crianca => {
            if (crianca) {
                crianca.update({
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
                },
                    {
                        where: { id: id }
                    })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
    }
exports.Delete =  (req, res, next)=>{
    const id = req.params.id;

    Crianca.findByPk(id)
    .then(crianca =>{
        if(crianca){
           crianca.destroy({
               where: {id: id}
           })
           .then(()=>{
               res.status(status.OK).send();
           })
           .catch(error => next(error));
        } else {
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
}