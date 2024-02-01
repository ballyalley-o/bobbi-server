import { Application } from 'express'
import authRouter from '@routes/auth'
import { PathDir } from '@constants'

const linkNex = (app: Application) => {
  app.use(PathDir.AUTH_ROOT, authRouter)
}

export default linkNex
