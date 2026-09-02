const express = require("express");
const router = express.Router();

const { 
    login, 
    cadastrar,
     listar, 
     buscar, 
     logout } = require("../controllers/usuario.controllers.js");

router.post("/login", login); 
router.post("/cadastrar", cadastrar); 
router.get("/listar", listar); 
router.get("/buscar/:id", buscar); 
router.post("/logout", logout);

module.exports = router;