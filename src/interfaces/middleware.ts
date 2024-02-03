import { Request } from 'express'

export interface IRequestExtended extends Request {
  body: { [key: string]: string | undefined }
}
