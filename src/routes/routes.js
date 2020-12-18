const express = require('express');
const router = express.Router();
const UsuarioController = require('../controller/UsuarioController');
const CriancaController = require('../controller/CriancaController');
const QrcodeController = require('../controller/QrcodeController');

router.post('/usuario', UsuarioController.Insert);
router.post('/crianca', CriancaController.Insert);
router.post('/qrcode', QrcodeController.Insert);

module.exports = router;