const express = require('express');
const router = express.Router();

const {
    listar,
    buscar,
    registrarMovimentacao
} = require('../controllers/producao.controllers.js');

router.get('/estoque', listar);
router.get('/historico', buscar);
router.post('/movimentacao', registrarMovimentacao);

module.exports = router;