const Qrcode = require('../models/qrcode');
const status = require('http-status');

exports.Insert = (req, res, next) => {
    const codigo = req.body.codigo;
    const localizao = req.body.localizao;
    const usuarioId = req.body.usuarioId;

    Qrcode.Create({
        codigo: codigo,
        localizao: localizao,
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