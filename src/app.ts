import dotenv from 'dotenv'
dotenv.config()

import 'reflect-metadata'

import cors from 'cors'
import express, { Express } from 'express'

import routes from './app/routes'

class App {
  public server: Express

  constructor() {
    this.server = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(express.json())
    this.server.use(cors())
  }

  routes() {
    this.server.use(routes)
  }
}

export default new App()
