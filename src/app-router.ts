import express from 'express'
import { GLOBAL } from '@config'
import { PathDir } from '@constants'
import { RESPONSE } from '@constants'
import { Request, Response } from 'express'

const ENV = 'production'

class AppRouter {
  private static _router: express.Router

  static get instance(): express.Router {
    if (!AppRouter._router) {
      AppRouter._router = express.Router()
    }

    return AppRouter._router
  }

  static serverRouter() {
    if (GLOBAL.ENV === ENV) {
      this._router.use(express.static(PathDir.BUILD_LOC))
      this._router.get('*', (req: Request, res: Response) =>
        res.sendFile(PathDir.BUILD_VIEW)
      )
    } else {
      this._router.get(PathDir.API_ROOT, RESPONSE.server)
    }
  }
}

export default AppRouter
