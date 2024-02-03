import { Router } from 'express'
import { coreController } from '@controllers'
import { PathDir } from '@constants'

const router = Router()

router.get(PathDir.HOME_PARAM, coreController.getCore)

const coreRouter = router
export default coreRouter
