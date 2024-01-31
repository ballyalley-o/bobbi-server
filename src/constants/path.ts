import { __dirname } from '../config'
import { conNex } from '../utils'

const PATH = {
  HOME: '/',
  BUILD_LOC: 'client/.dist',
  BUILD_VIEW: conNex(__dirname, 'client', 'dist', 'index.html'),
}

export default PATH
