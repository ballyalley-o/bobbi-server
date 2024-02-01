import { Request, Response } from 'express'
import { GLOBAL } from '@config'

const RESPONSE = {
  server: (req: Request, res: Response) => {
    const response = {
      name: GLOBAL.APP_NAME,
      status: 'Running',
      appServerName: GLOBAL.APP_SERVER_NAME,
      version: GLOBAL.API_VERSION,
      url: GLOBAL.API_URL,
      port: GLOBAL.PORT,
      environment: GLOBAL.ENV,
    }
    res.send(response)
  },
}

export default RESPONSE
