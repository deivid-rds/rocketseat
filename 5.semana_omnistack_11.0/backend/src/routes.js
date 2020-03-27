const express = require('express');

const OngController = require('./controllers/OngController');

const routes = express.Router();

// Listar ongs
routes.get('/ongs', OngController.index);

// Cadastrar ongs
routes.post('/ongs', OngController.create);

module.exports = routes;