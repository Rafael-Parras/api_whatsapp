const {Router} = require("express");
const connection = require("../db/connection");


const router = Router();




router.post("/auth", (req, res) => { 


    const { telefone, senha} = req.query;


    res.json({
        mensagem: "autenticado com sucesso"});
});






module.exports = router;