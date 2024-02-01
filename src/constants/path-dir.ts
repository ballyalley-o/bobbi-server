import { __dirname } from '@config'
import { GLOBAL } from '@config'
import { conNex } from '@utils'


export class PathDir {
  static readonly HOME_PARAM = '/'
  static readonly API_PARAM = '/api'


  static HOME = conNex(GLOBAL.API_URL, PathDir.HOME_PARAM)
  static API = conNex(PathDir.API_PARAM, GLOBAL.API_VERSION)
  static BUILD_LOC = 'client/.dist'
  static BUILD_VIEW = conNex(__dirname, 'client', 'dist', 'index.html')
}
