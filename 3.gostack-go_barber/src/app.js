// Criação das middlewares e rotas

import express from 'express'
import routes from './routes'

class App {
    // Sempre que essa classe for chamada, o constructor será executado
    constructor() {
        this.server = express()

        // Necessário chmamá-los, senão não serão executados
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.server.use(express.json())
    }

    routes() {
        this.server.use(routes)
    }
}

// Instanciando nossa aplicação
export default new App().server