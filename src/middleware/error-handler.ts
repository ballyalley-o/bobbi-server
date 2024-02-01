import { ExpressCallback } from '@typings'
import { Request, Response, NextFunction } from 'express'
import { RESPONSE } from '@constants'
import { GLOBAL } from '@config'

class ErrorCallback extends Error {
  kind: string
  errors: any[]

  constructor(message: string, kind: string, errors: any[]) {
    super(message)
    this.kind = kind
    this.errors = errors
    this.name = this.constructor.name
  }
}

const errorHandler = (
  err: ErrorCallback,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = res.statusCode === 0 ? 500 : res.statusCode
  let message = err.message
  let errors = err.errors
  let ENV = 'production'

  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    statusCode = 404
    message = RESPONSE.error[404]
  }

  if (err.errors) {
    const errorArr = Object.values(err.errors).map((err: any) => err.message)
    statusCode = 400
    errors = errorArr
  }

  res.status(statusCode).json({
    message: message || errors,
    stack: GLOBAL.ENV === ENV ? err.stack : null,
  })
}

export default errorHandler
