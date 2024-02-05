import { IExpressController } from '@interfaces/middleware'
import { Element } from '@constants'

const authProtect: IExpressController = (req, res, next) => {
  if (req.session && req.session.signedIn) {
    next()
    return
  } else {
    res.status(401).send(Element.CORE('UNAUTHORIZED ACCESS'))
  }
}

export default authProtect
