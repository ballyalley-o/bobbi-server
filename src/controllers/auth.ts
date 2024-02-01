import { Request, Response } from 'express'
import { asyncHandler } from '@middleware'
import { ExpressCallback } from '@typings'
import { ELEMENT } from '@constants'

const authSignIn = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send(ELEMENT.LOGIN_FORM)
})

const authController = { authSignIn }
export default authController
