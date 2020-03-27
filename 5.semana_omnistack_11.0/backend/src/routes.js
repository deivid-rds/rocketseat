const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// Login
routes.post('/sessions', SessionController.create);

// Listar ongs
routes.get('/ongs', OngController.index);

// Cadastrar ongs
routes.post('/ongs', OngController.create);

// Listar perfil
routes.get('/profile', ProfileController.index);

// Listar casos
routes.get('/incidents', IncidentController.index);

// Cadastrar casos
routes.post('/incidents', IncidentController.create);

// Excluir casos
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;