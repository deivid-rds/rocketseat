// Importando o express
const express = require('express');
const { uuid } = require('uuidv4');

const app = express();

app.use(express.json());

const projects = [];

// Listar informações
app.get('/projects', (request, response) => {

    // const { title, owner } = request.query;

    // console.log(title);
    // console.log(owner);

    return response.json([projects]);
});

// Gravar informações
app.post('/projects', (request, response) => {

    const { title, owner } = request.body;

    console.log(title);
    console.log(owner);

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ]);
});

// Alterar informações
app.put('/projects/:id', (request, response) => {

    const { id } = request.params;

    console.log(id);

    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3',
    ]);
});

// Deletar informações
app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 2',
        'Projeto 3',
    ]);
});

// Porta que fica sempre 'ouvindo'
app.listen(3333, () => {
    console.log('🚀️ Back-end started!'); 
});