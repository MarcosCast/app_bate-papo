var express = require('express');

var app = express();

app.use(express.json());

app.use(express.urlencoded({extended: false}))

var server = app.listen(3000, () => {
    console.log('Servidor esta rodando na porta', server.address().port);
})

app.use(express.static(__dirname));

var mongoose = require('mongoose');

var dbUrl = 'mongodb+srv://username:password@ds257981.mongodb.net:57981/simple-chat';

mongoose.connect(dbUrl , (err) => {
    console.log('mongoose connected', err);
})

var Message = mongoose.model('Message', { name : String, message : String})

