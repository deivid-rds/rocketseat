// Importando o express
const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
    return response.send('Hello Word');
});

// Porta que fica sempre 'ouvindo'
app.listen(3333);