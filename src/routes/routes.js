const express = require('express');
const router = express.Router();
const UsuarioController = require('../controller/UsuarioController');
const CriancaController = require('../controller/CriancaController');
const QrcodeController = require('../controller/QrcodeController');

router.post('/usuarios', UsuarioController.Insert);
router.get('/usuarios', UsuarioController.SelectAll);
router.post('/criancas', CriancaController.Insert);
router.post('/qrcodes', QrcodeController.Insert);

module.exports = router;