import path from 'path'
import express, { Application, Request, Response } from 'express'
import { GLOBAL, __dirname } from '@config'
import { RESPONSE, PathDir } from '@constants'

const ENV = 'production'

const serverRoute = (app: Application) => {
  if (GLOBAL.ENV === ENV) {
    app.use(express.static(path.join(__dirname, PathDir.BUILD_LOC)))
    app.get('*', (req: Request, res: Response) =>
      res.sendFile(PathDir.BUILD_VIEW)
    )
  } else {
    app.get(PathDir.API, RESPONSE.server)
  }
}

export default serverRoute
