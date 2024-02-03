import { Response } from 'express'
import { asyncHandler } from '@middleware'
import { IRequestExtended } from '@interfaces/middleware'
import { Element } from '@constants'

const getCore = asyncHandler(async (req: IRequestExtended, res: Response) => {
  if (req.session && req.session.signedIn) {
  }
  res.status(200).send(Element.CORE('You are Logged In!'))
})

const coreController = { getCore }
export default coreController
