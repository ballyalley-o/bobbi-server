import 'reflect-metadata'
import { RequestHandler, Request, Response, NextFunction } from 'express'
import { MetaKey } from '@constants/enum'
import { RESPONSE } from '@constants'

export function bodyValidator(...keys: string[] | []) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetaKey.validator, keys, target, key)
  }
}

export function autoValidate(keys: string): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send(RESPONSE.error[422])
      return
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(RESPONSE.error.missingKey(key))
        return
      }
    }

    next()
  }
}
