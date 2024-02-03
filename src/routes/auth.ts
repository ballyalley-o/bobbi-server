import { Router } from 'express'
import { authController } from '@controllers'
import { PathDir } from '@constants'

const router = Router()

router.get(PathDir.SIGN_IN_PARAM, authController.getForm)
router.post(PathDir.SIGN_IN_PARAM, authController.signIn)

const authRouter = router
export default authRouter
