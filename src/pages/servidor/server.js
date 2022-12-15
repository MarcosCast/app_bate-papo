var express = require('express');

var app = express();

var server = app.listen(3000, () => {
    console.log('Servidor esta rodando na porta', server.address().port);
})