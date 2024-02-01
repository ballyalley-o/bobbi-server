import { Router } from 'express'
import { authController } from '@controllers'

const router = Router()

router.post('/', authController.authSignIn)
