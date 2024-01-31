import 'colors'

declare module 'colors' {
  interface String {
    yellow: string
    bgCyan: string
    bgRed: string
    red: string
    bgYellow: string
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
      console.log('ENVIRONMENT: '.bgYellow, 'DEVELOPMENT'.green.bold)
    }

    if (isConnected) {
      console.log('SERVER STATUS: '.bgYellow, 'CONNECTED 🟢'.green.bold)
    } else {
      console.log('SERVER STATUS: '.bgYellow, 'NOT CONNECTED ❌'.red.bold)
    }
  },
}

export default logger
