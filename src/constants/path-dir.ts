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
  static readonly API_PARAM = '/api'
  static readonly HOME_PARAM_v2 = '/home'
  static AUTH_PARAM = '/auth'
  static SIGN_IN_PARAM = '/sign-in'

  /**
   * Connect the path
   * @returns void
   */
  private static connex = conNex

  // endpoints
  static API_ROOT = this.connex(PathDir.API_PARAM, GLOBAL.API_VERSION)
  static HOME = this.connex(PathDir.API_ROOT, this.HOME_PARAM_v2)
  static AUTH_ROOT = this.connex(PathDir.API_ROOT, PathDir.AUTH_PARAM)

  // @production
  static BUILD_LOC = this.connex(__dirname, 'client', '.dist')
  static BUILD_VIEW = this.connex(__dirname, 'client', '.dist', 'index.html')
}
