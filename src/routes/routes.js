const express = require('express');
const router = express.Router();
const UsuarioController = require('../controller/UsuarioController');

router.post('/usuario', UsuarioController.Insert);

module.exports = router;