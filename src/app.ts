import dotenv from 'dotenv'
dotenv.config()

import 'reflect-metadata'

import cors from 'cors'
import express, { Express } from 'express'
import { createConnection } from 'typeorm'

import routes from './app/routes'

class App {
  public server: Express

  constructor() {
    // this.database()
    //   .then(() => {
    this.server = express()
    this.middlewares()
    this.routes()
    // })
    // .catch((error) => console.log(error));
  }

  middlewares() {
    this.server.use(express.json())
    this.server.use(cors())
  }

  routes() {
    this.server.use(routes)
  }

  database(): Promise<any> {
    return createConnection()
  }
}

export default new App()
