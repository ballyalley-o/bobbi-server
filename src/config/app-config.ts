import express, { Application } from 'express'
import serverRoute from '../routes/main'
import GLOBAL from './global'
import { logger } from '../middleware'

/**
 *
 * @class App
 *
 * @description
 *  -
 *
 */
class App {
  private app: Application
  private env: string = GLOBAL.ENV

  static app() {
    return new App().start()
  }

  /**
   * Initialize the app
   *
   * @param app
   * @param env - environment
   * @param port - port
   *
   * Constructor
   *
   */
  constructor() {
    this.app = express()
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.registerRoutes()
  }

  /**
   * Register routes
   * @returns void
   */
  private registerRoutes() {
    serverRoute(this.app)
  }

  /**
   * Start the server
   * @returns void
   */
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
