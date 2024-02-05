import { Response } from 'express'
import { IRequestExtended } from '@interfaces/middleware'
import { Element } from '@constants'
import { controller, get, use } from '@decorators'
import { LogRequest, authProtect } from '@decorators'
import { PathDir } from '@constants'

// const getCore = asyncHandler(async (req: IRequestExtended, res: Response) => {
//   if (req.session && req.session.signedIn) {
//     res.status(200).send(Element.CORE('HOME PAGE'))
//   } else {
//     res.status(200).send(Element.SIGNIN_REDIR)
//   }
// })

// const coreController = { getCore }
// export default coreController

@controller(PathDir.HOME_PARAM)
export class HomeController {
  /**
   *  Get the Home Page
   * @param req - IRequestExtended
   * @param res - Response
   */
  @get(PathDir.ORIGIN_PARAM)
  @use(authProtect)
  getForm(req: Request, res: Response): void {
    res.status(200).send(Element.SIGNIN_FORM)
  }
}
