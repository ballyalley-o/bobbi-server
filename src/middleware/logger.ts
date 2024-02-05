import 'colors'
import { IExpressController } from '@interfaces/middleware'
import { Request, Response, NextFunction } from 'express'

declare module 'colors' {
  interface String {
    yellow: string
    bgRed: string
    red: string
    blue: string
    bgCyan: string
    bgYellow: string
    inverted: string
    // errored: any[]
  }
}

const logger = {
  custom: (color: string, ...message: any[]) => {
    console.log((message.join('') as any)[color])
  },

  log: (...message: any[]) => {
    console.log(message.join('').yellow.bold)
  },

  info: (...message: any[]) => {
    console.log(message.join('').bgCyan)
  },

  warn: (...message: any[]) => {
    console.log(message.join('').bgYellow)
  },

  error: (...message: any[]) => {
    console.log(message.join('').red.bold)
  },

  table: (...message: any[]) => {
    console.table(message)
  },

  req: (req: Request, res: Response) => {
    console.log('')
    console.log(' Request Method: '.dim, req.method.yellow.bold)
    console.log(' Request URL: '.dim, req.url.yellow.bold)
    console.log(' Request IP: '.dim, req?.ip?.yellow.bold)
    console.log(' Request Time: '.dim, new Date().toString().yellow.bold)
    console.log('')
  },

  server: (
    port: string,
    apiRoot: string,
    isProd: boolean,
    isConnected: boolean
  ) => {
    console.log('SERVER PORT: '.bgYellow, port.yellow.bold)
    console.log('API VERSION: '.bgYellow, apiRoot.yellow.bold)
    if (isProd) {
      console.log('ENVIRONMENT: '.bgYellow, 'PRODUCTION'.blue.bold)
    } else {
      console.log('ENVIRONMENT: '.bgYellow, 'DEVELOPMENT'.white.bold)
    }

    if (isConnected) {
      console.log('SERVER STATUS: '.bgYellow, 'CONNECTED 🟢'.green.bold)
    } else {
      console.log('SERVER STATUS: '.bgYellow, 'NOT CONNECTED ❌'.red.bold)
    }
  },
}

export default logger
