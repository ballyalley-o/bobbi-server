import { NextFunction, Request, Response } from 'express'
import { asyncHandler } from '@middleware'
import { IRequestExtended } from '@interfaces/middleware'
import { Element } from '@constants'

const getForm = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send(Element.SIGNIN_FORM)
})

const signIn = asyncHandler(
  async (req: IRequestExtended, res: Response, next: NextFunction) => {
    const { email, password } = req.body

    if (email) {
      req.session = { signedIn: true }
      res.status(201).send({ message: 'successful attempt', email, password })
    } else {
      res.status(400).send({ message: 'failed attempt' })
    }
  }
)

const authController = { getForm, signIn }
export default authController
