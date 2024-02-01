import { __dirname } from '@config'
import { GLOBAL } from '@config'
import { conNex } from '@utils'

export class PathDir {
  static readonly HOME_PARAM = '/'
  static readonly API_PARAM = '/api'
  static AUTH_PARAM = '/auth'
  static SIGN_IN_PARAM = '/sign-in'

  private static connex = conNex

  static HOME = this.connex(GLOBAL.API_URL, PathDir.HOME_PARAM)
  static API = this.connex(PathDir.API_PARAM, GLOBAL.API_VERSION)
  static API_ROOT = this.connex(PathDir.API_PARAM, GLOBAL.API_VERSION)
  static AUTH_ROOT = this.connex(PathDir.API_ROOT, PathDir.AUTH_PARAM)

  // @production
  static BUILD_LOC = this.connex(__dirname, 'client', '.dist')
  static BUILD_VIEW = this.connex(__dirname, 'client', '.dist', 'index.html')
}
