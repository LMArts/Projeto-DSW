const express = require('express');
const router = express.Router();
const UsuarioController = require('../controller/UsuarioController');
const CriancaController = require('../controller/CriancaController');
const QrcodeController = require('../controller/QrcodeController');

router.post('/usuarios', UsuarioController.Insert);
router.get('/usuarios', UsuarioController.SelectAll);
router.get('/usuarios/:id', UsuarioController.SelectOne);
router.put('/usuarios/:id', UsuarioController.Update);

router.post('/criancas', CriancaController.Insert);
router.get('/criancas', CriancaController.SelectAll);
router.get('/criancas/:id', CriancaController.SelectOne);
router.put('/criancas/:id', CriancaController.Update);


router.post('/qrcodes', QrcodeController.Insert);
router.get('/qrcodes', QrcodeController.SelectAll);
router.get('/qrcodes/:id', QrcodeController.SelectOne);
router.put('/qrcodes/:id', QrcodeController.Update);

module.exports = router;