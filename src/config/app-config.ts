import express, { Application } from 'express'
import serverRoute from '@routes/main'
import GLOBAL from '@config/global'
import { logger, errorHandler, notFound } from '@middleware'
import linkNex from '@routes'

/**
 *
 * @class App
 *
 * @description
 *    This class represents the application, it is responsible for initializing the app and starting the server.
 *    It also registers the routes.
 *
 * @returns void
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
    this.app.use(notFound)
    this.app.use(errorHandler)
  }

  /**
   * Register routes
   * @returns void
   */
  private registerRoutes() {
    linkNex(this.app)
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
