const Usuario = require('../models/usuario');
const status = require('http-status');

exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const telefone = req.body.telefone;
    const email = req.body.email;
    const cidade = req.body.cidade;
    const estado = req.body.estado;
    const rua = req.body.rua;
    const bairro = req.body.bairro;
    const numero = req.body.numero;
    const senha = req.body.senha;

    Usuario.create({
        nome: nome,
        telefone: telefone,
        email: email,
        cidade: cidade,
        estado: estado,
        rua: rua,
        bairro: bairro,
        numero: numero,
        senha: senha
    })
    .then(usuario => {
        if(usuario){
            res.status(status.OK).send(usuario);
        } else {
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
}

exports.SelectAll = (req, res, next)=>{
    Usuario.findAll()
    .then(usuario => {
        if(usuario){
            res.status(status.OK).send(usuario);
        }
    })
    .catch(error => next(error));
}