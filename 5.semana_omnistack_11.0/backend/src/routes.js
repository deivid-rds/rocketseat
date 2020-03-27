const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

// Listar ongs
routes.get('/ongs', OngController.index);

// Cadastrar ongs
routes.post('/ongs', OngController.create);

// Listar casos
routes.get('/incidents', IncidentController.index);

// Cadastrar casos
routes.post('/incidents', IncidentController.create);

module.exports = routes;