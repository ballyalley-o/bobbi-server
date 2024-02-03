import { __dirname } from '@config'
import { GLOBAL } from '@config'
import { conNex } from '@utils'

/**
 * @class PathDir
 * @description This class represents the path directory
 * @returns void
 */
export class PathDir {
  // path parameters
  static readonly HOME_PARAM = '/'
  static readonly HOME_PARAM_v2 = '/home'
  static readonly API_PARAM = '/api'
  static readonly AUTH_PARAM = '/auth'
  static readonly SIGN_IN_PARAM = '/sign-in'
  static readonly SIGN_OUT_PARAM = '/sign-out'

  /**
   * Connect the path
   * @returns void
   */
  private static connex = conNex

  // endpoints
  static API_ROOT = this.connex(PathDir.API_PARAM, GLOBAL.API_VERSION)
  static HOME = this.connex(PathDir.API_ROOT, this.HOME_PARAM_v2)
  static AUTH_ROOT = this.connex(PathDir.API_ROOT, PathDir.AUTH_PARAM)
  static SIGN_IN = this.connex(PathDir.AUTH_ROOT, PathDir.SIGN_IN_PARAM)
  static SIGN_OUT = this.connex(PathDir.AUTH_ROOT, PathDir.SIGN_OUT_PARAM)

  // @production
  static BUILD_LOC = this.connex(__dirname, 'client', '.dist')
  static BUILD_VIEW = this.connex(__dirname, 'client', '.dist', 'index.html')
}
