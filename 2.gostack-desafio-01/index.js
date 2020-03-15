const express = require('express')

const server = express()

// Necessário adicionar esse plugin/módulo que entende json (o json está dentro do pacote do express)
server.use(express.json())

const projeto = ['Outro projeto', 'Novo projeto', 'Projeto dois']

// Trazer todos os projetos
server.get('/projetos', (req, res) => {
    return res.json(projeto)
})

// Criar novo projeto
server.post('/projetos', (req, res) => {
    const { titulo, tarefas } = req.body;

    projeto.push(titulo, tarefas)

    return res.json(projeto)
})

// Alterar projeto
server.put('/projetos/:id', (req, res) => {
    const { id } = req.params
    const { titulo } = req.body

    projeto[id] = titulo

    return res.json(projeto)
})

// Deletar projeto
server.delete('/projetos/:id', (req, res) => {
    const { id } = req.params

    projeto.splice(id, 1)            // splice percorrerá o vertor e cortará 1 posição

    return res.json(projeto)
})

// Porta escolhida para teste
server.listen(3000)