const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();

//Conexão
mongoose.connect('mongodb+srv://omnistack:omnistack8@cluster0-3ps4j.mongodb.net/omnistack8?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.use(cors());
//Dados seram passados via json
server.use(express.json());


server.use(routes);


server.listen(3333);