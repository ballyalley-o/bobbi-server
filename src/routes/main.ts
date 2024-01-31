import path from 'path'
import express, { Application, Request, Response } from 'express'
import { GLOBAL, __dirname } from '../config'
import { PATH, PATH_DIR, RESPONSE } from '../constants'

const ENV = 'production'

const serverRoute = (app: Application) => {
  if (GLOBAL.ENV === ENV) {
    app.use(express.static(path.join(__dirname, PATH.BUILD_LOC)))
    app.get('*', (req: Request, res: Response) => res.sendFile(PATH.BUILD_VIEW))
  } else {
    app.get(PATH_DIR.API, RESPONSE.server)
  }
}

export default serverRoute
