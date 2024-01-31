import { Request, Response } from 'express'
import { GLOBAL } from '../config'

const RESPONSE = {
  server: (req: Request, res: Response) => {
    const response = {
      name: 'Bobbi',
      status: 'Running',
      API: 'bobbi-server',
      url: GLOBAL.API_URL,
      port: GLOBAL.PORT,
      environment: GLOBAL.ENV,
    }
    res.send(response)
  },
}

export default RESPONSE
