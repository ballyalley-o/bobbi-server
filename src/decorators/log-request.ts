import { Request, Response, NextFunction } from 'express'
import { logger } from '@middleware'
import { IExpressController } from '@interfaces/middleware'

const LogRequest: IExpressController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.req(req, res)
  next()
}

export default LogRequest
