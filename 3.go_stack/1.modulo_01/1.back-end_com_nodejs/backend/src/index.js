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

    const project = { id: uuid(), title, owner };

    projects.push(project);

    return response.json(project);
});

// Alterar informações
app.put('/projects/:id', (request, response) => {

    const { id } = request.params;
    const { title, owner } = request.body;

    const projectIndex = projects.findIndex(project => project.id === id);

    if(projectIndex < 0){
        return response.status(400).json({ error: 'Project not found.' })
    }

    const project = {
        id,
        title,
        owner,
    };

    projects[projectIndex] = project;

    return response.json(project);
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