import PATH from './path'
import { __dirname, GLOBAL } from '../config'
import { conNex } from '../utils'

const PATH_DIR = {
  HOME: conNex(GLOBAL.API_URL, PATH.HOME),
}

export default PATH_DIR
