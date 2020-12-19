const express = require('express');
const router = express.Router();
const UsuarioController = require('../controller/UsuarioController');
const CriancaController = require('../controller/CriancaController');
const QrcodeController = require('../controller/QrcodeController');

router.post('/usuarios', UsuarioController.Insert);
router.put('/usuarios/:id', UsuarioController.Update);

router.post('/criancas', CriancaController.Insert);
router.put('/criancas/:id', CriancaController.Update);

router.post('/qrcodes', QrcodeController.Insert);
router.put('/qrcodes/:id', QrcodeController.Update);

module.exports = router;