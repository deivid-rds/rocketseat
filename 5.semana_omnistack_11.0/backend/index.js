const express = require('express');

const app = express();

app.use(express.json());

// Rota: http://localhost:3000/users
// Recurso: /users

app.post('/users/', (request, response) => {

    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Deivid Souza'
    });
});

app.listen(3333);