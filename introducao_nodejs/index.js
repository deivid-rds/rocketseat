const express = require('express')

const server = express()

// Necessário adicionar esse plugin/módulo que entende json (o json está dentro do pacote do express)
server.use(express.json())

// Query params = ?teste=1      (Usado com a interrogação)
// Route params = /users/1      (Usado com barra)
// Request body = { "name": "Diego", "email": "diego@rocketseat.com.br" }

const users = ['Diego', 'Robson', 'Victor']

// Middleware global
server.use((req, res, next) => {       
    console.time('Request')
    console.log(`Método: ${req.method}; URL: ${req.url}`)

    next()

    console.timeEnd('Request')
})

// Middleware local
function checkUserExists(req, res, next) {
    // Se não encontrar um nome...
    if(!req.body.name) {
        return res.status(400).json({ error: 'User name is required' })
    }

    return next()
}

// Middleware que verifica se existe o usuário pesquisado no array
function checkUserInArray(req, res, next) {
    const user = users[req.params.index]
    
    // Se não encontrar o index...
    if(!user) {
        return res.status(400).json({ error: 'User does not exists' })
    }

    req.user = user;    // Adicionando uma nova variável user no req e recebendo user

    return next()
}

// Retornando vários usuários
server.get('/users', (req, res) => {
    return res.json(users)
}) 

// Retornando um usuário
server.get('/users/:index', checkUserInArray, (req, res) => {
    return res.json(req.user)
})        

// Criar novo usuário 
server.post('/users', checkUserExists, (req, res) => {
    const { name } = req.body;

    users.push(name)

    return res.json(users)
})

// Alterar usuário
server.put('/users/:index', checkUserInArray, checkUserExists, (req, res) => {
    const { index } = req.params
    const { name } = req.body

    users[index] = name

    return res.json(users)
})

// Deletar usuário
server.delete('/users/:index', checkUserInArray, (req, res) => {
    const { index } = req.params

    users.splice(index, 1)      // splice percorrerá o vertor e cortará 1 posição

    return res.json(users)
})

// Porta escolhida para teste
server.listen(3000)