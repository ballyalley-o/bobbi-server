import { IExpressController } from '@interfaces/middleware'

interface ILogger {
  /**
   *
   * @param color   'red' | 'yellow' | 'bgRed' | 'bgYellow' | 'bgCyan'
   * @param params  any[]
   * @returns  {void}
   */
  custom: (color: string, ...params: any[]) => void

  /**
   * @param params  any[]
   * @returns  {void}
   */
  log: (...params: any[]) => void
  info: (...params: any[]) => void
  warn: (...params: any[]) => void
  error: (...params: any[]) => void
  table: (...params: any[]) => void

  req: IExpressController

  /**
   *
   * @param port  port number
   * @param apiRoot  api base
   * @param isConnected  connection status
   * @returns  {void}
   */
  server: (port: number, apiRoot: string, isConnected: string) => void
}
