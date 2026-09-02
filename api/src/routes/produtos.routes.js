const express = require("express");
const router = express.Router();

const { 
    adicionar,
    listar, 
    buscar, 
    atualizar, 
    excluir 
} = require("../controllers/produtos.controllers.js");

router.post("/cadastrar", adicionar); 
router.get("/listar", listar); 
router.get("/buscar/:id", buscar);
router.put("/atualizar/:id", atualizar);
router.delete("/excluir/:id", excluir); 

module.exports = router;