const Qrcode = require('../models/qrcode');
const status = require('http-status');

exports.Insert = (req, res, next) => {
    const codigo = req.body.codigo;
    const localizacao = req.body.localizacao;
    const usuarioId = req.body.usuarioId;

    Qrcode.create({
        codigo: codigo,
        localizacao: localizacao,
        usuarioId: usuarioId,
    })
    .then(qrcode => {
        if(qrcode){
            res.status(status.OK).send(qrcode);
        } else {
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
}

exports.SelectAll = (req, res, next)=>{
    Qrcode.findAll()
    .then(qrcode => {
        if(qrcode){
            res.status(status.OK).send(qrcode);
        }
    })
    .catch(error => next(error));
}

exports.SelectOne = (req, res, next)=>{
    const id = req.params.id;

    Qrcode.findByPk(id)
    .then(qrcode =>{
        if(qrcode){
            res.status(status.OK).send(qrcode);
        } else {
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));

}


exports.Delete =  (req, res, next)=>{
    const id = req.params.id;

    Qrcode.findByPk(id)
    .then(qrcode =>{
        if(qrcode){
           qrcode.destroy({
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