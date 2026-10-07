const express = require('express');
const mySql = require('mysql2/promise');
const authRoute = require('./routes/auth.route.js');

const app = express();

app.use(express.json());
app.use(authRoute);

const port = 3000;
const server = "localhost";

// CORREÇÃO: Uso de crases (``) para permitir a interpolação de variáveis
const msg = `servidor rodando em ${server}:${port}`;

app.listen(port, () => {
    console.log(msg);
});
