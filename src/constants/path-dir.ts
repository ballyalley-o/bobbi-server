import { __dirname } from '@config'
import { GLOBAL } from '@config'
import { conNex } from '@utils'

/**
 * @class PathDir
 * @description This class handles all routers/traffic and acts as a path directory
 * @returns void
 */
export class PathDir {
  constructor() {
    throw new Error('This class cannot be instantiated')
  }

  // TODO: refax to use enum
  // path parameters
  static readonly ORIGIN_PARAM = '/'
  static readonly HOME_PARAM = '/home'
  static readonly API_PARAM = '/api'
  static readonly AUTH_PARAM = '/auth'
  static readonly SIGN_IN_PARAM = '/sign-in'
  static readonly SIGN_OUT_PARAM = '/sign-out'

  /**
   * Connect the path
   * @returns void
   */
  private static _connex = conNex

  // endpoints
  static API_ROOT = this._connex(PathDir.API_PARAM, GLOBAL.API_VERSION)
  static HOME = this._connex(PathDir.API_ROOT, this.HOME_PARAM)
  static AUTH_ROOT = this._connex(PathDir.API_ROOT, PathDir.AUTH_PARAM)
  static SIGN_IN = this._connex(PathDir.AUTH_ROOT, PathDir.SIGN_IN_PARAM)
  static SIGN_OUT = this._connex(PathDir.AUTH_ROOT, PathDir.SIGN_OUT_PARAM)

  // @production
  static BUILD_LOC = this._connex(__dirname, 'client', '.dist')
  static BUILD_VIEW = this._connex(__dirname, 'client', '.dist', 'index.html')
}
