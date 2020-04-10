// Importando o express
const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: 'Hello Word' });
});

// Porta que fica sempre 'ouvindo'
app.listen(3333);