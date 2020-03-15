// Montagem das rotas

// Router = uma forma de separar o roteamento do express em outro arquivo
// Aqui está sendo imprtado apenas o Router e não o Express inteiro
import { Router } from 'express'

const routes = new Router()

routes.get('/', (req, res) => {
    return res.json({ message: 'Hello Rocketseat' })
})

export default routes