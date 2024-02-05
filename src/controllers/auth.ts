import { Request, Response, NextFunction } from 'express'
import { IRequestExtended } from '@interfaces/middleware'
import { Element, PathDir } from '@constants'
import { get, post, controller, use, LogRequest } from '@decorators'

// // @desc    - Get the Sign-In Form
// // @route   - GET /auth/sign-in
// // @access  - Public
// const getForm = asyncHandler(async (req: Request, res: Response) => {
//   res.status(200).send(Element.SIGNIN_FORM)
// })

// // @desc    - Sign-In User
// // @route   - POST /auth/sign-in
// // @access  - Public
// const signIn = asyncHandler(
//   async (req: Request, res: Response, next: NextFunction) => {
//     const { email, password } = req.body

//     if (email === 'user@bobbi.com' && password === '123456') {
//       const user = {
//         id: 1,
//         username: 'userbobbi1',
//         email,
//       }

//       req.session = {
//         signedIn: true,
//         userId: user.id,
//         username: user.username,
//         email: email,
//       }

//       res.status(200).redirect(PathDir.AUTH_ROOT)
//     } else {
//       res.status(400).send({ message: 'failed attempt' })
//     }
//   }
// )

// // @desc    - Sign-Out User
// // @route   - POST /auth/sign-out
// // @access  - Public
// const signOut = asyncHandler(
//   async (req: IRequestExtended, res: Response, next: NextFunction) => {
//     if (req.session) {
//       req.session = null
//       res.status(200).send(Element.SIGNOUT_REDIR)
//     } else {
//       res.status(401).send({ message: 'User failed to sign-out' })
//     }
//   }
// )

// // @desc    - Signed-in  User
// // @route   - GET /auth
// // @access  - Public
// const getAuth = asyncHandler(
//   async (req: Request, res: Response, next: NextFunction) => {
//     if (req.session && req.session.signedIn) {
//       // req.session = {}
//       res.status(200).send(Element.CORE('You are Logged In'))
//     } else {
//       res.status(401).send(Element.SIGNIN_REDIR)
//     }
//   }
// )

// const authController = { getForm, signIn, signOut, getAuth }
// export default authController

// class  refactor

@controller(PathDir.AUTH_PARAM)
export class AuthController {
  // @desc    - Get the Sign-In Form
  // @route   - GET /auth/sign-in
  // @access  - Public
  @get(PathDir.SIGN_IN_PARAM)
  @use(LogRequest)
  getForm(req: Request, res: Response): void {
    res.status(200).send(Element.SIGNIN_FORM)
  }

  // @desc    - Sign-In User
  // @route   - POST /auth/sign-in
  // @access  - Public
  @post(PathDir.SIGN_IN_PARAM)
  @use(LogRequest)
  signIn(req: Request, res: Response, next: NextFunction): void {
    const { email, password } = req.body

    if (email === 'user@bobbi.com' && password === '123456') {
      const user = {
        id: 1,
        username: 'userbobbi1',
        email,
      }

      req.session = {
        signedIn: true,
        userId: user.id,
        username: user.username,
        email: email,
      }

      res.status(200).redirect(PathDir.AUTH_ROOT)
    } else {
      res.status(400).send({ message: 'failed attempt' })
    }
  }

  // @desc    - Signed-in  User
  // @route   - GET /auth
  // @access  - Public
  @get(PathDir.ORIGIN_PARAM)
  @use(LogRequest)
  getAuth(req: Request, res: Response, next: NextFunction): void {
    if (req.session && req.session.signedIn) {
      res.status(200).send(Element.CORE('You are Logged In'))
    } else {
      res.status(401).send(Element.SIGNIN_REDIR)
    }
  }

  // @desc    - Sign-Out User
  // @route   - POST /auth/sign-out
  // @access  - Public
  @post(PathDir.SIGN_OUT_PARAM)
  @use(LogRequest)
  signOut(req: IRequestExtended, res: Response, next: NextFunction): void {
    if (req.session) {
      req.session = null
      res.status(200).send(Element.SIGNOUT_REDIR)
    } else {
      res.status(401).send({ message: 'User failed to sign-out' })
    }
  }

  // @desc    - Sign-Out User (GET)
  // @route   - GET /auth/sign-out
  // @access  - Public
  @get(PathDir.SIGN_OUT_PARAM)
  @use(LogRequest)
  getSignOut(req: IRequestExtended, res: Response, next: NextFunction): void {
    if (req.session) {
      req.session = null
      res.status(200).send(Element.SIGNOUT_REDIR)
    } else {
      res.status(401).send({ message: 'User failed to sign-out' })
    }
  }
}
