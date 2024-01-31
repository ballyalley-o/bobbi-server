import express, { Application } from 'express'
import serverRoute from '../routes/main'
import GLOBAL from './global'
import { PATH_DIR } from '../constants'
import { logger } from '../middleware'

class App {
  private app: Application
  private env: string = GLOBAL.ENV

  static app() {
    return new App().app
  }

  constructor() {
    this.app = express()
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.registerRoutes()
  }

  private registerRoutes() {
    serverRoute(this.app)
  }

  public start(): void {
    let prod = false
    if (this.env === 'production') {
      prod = true
    }

    try {
      this.app.listen(GLOBAL.PORT, () => {
        logger.server(GLOBAL.PORT, GLOBAL.API_VERSION, prod, true)
      })
    } catch (error: any) {
      logger.server(GLOBAL.PORT, GLOBAL.API_VERSION, prod, false)
      logger.error(error.message)
    }
  }
}

export default App
