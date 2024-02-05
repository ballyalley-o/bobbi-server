import { Application, Router } from 'express'
import { PathDir } from '@constants'
import { linkAuthController } from '@decorators/routes'
import { AuthController } from '@controllers/auth'
// import authRouter from '@routes/auth'
// import coreRouter from '@routes/core'

// const linkNex = (app: Application) => {
//   app.use(PathDir.AUTH_ROOT, authRouter)
//   app.use(PathDir.HOME, coreRouter)
// }

// export default linkNex
