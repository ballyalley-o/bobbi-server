import { Application } from 'express'
import { PathDir } from '@constants'
import authRouter from '@routes/auth'
import coreRouter from '@routes/core'

const linkNex = (app: Application) => {
  app.use(PathDir.AUTH_ROOT, authRouter)
  app.use(PathDir.HOME, coreRouter)
}

export default linkNex
