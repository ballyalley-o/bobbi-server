// import express, { Application, Request, Response } from 'express'
// import { GLOBAL, __dirname } from '@config'
// import { RESPONSE, PathDir } from '@constants'
// import AppRouter from '@app-router'

// const ENV = 'production'
// const router = AppRouter.instance

// /**
//  * @description
//  *    This function is responsible for routing the server.
//  *
//  * @param app - express application
//  *
//  * @returns void
//  */
// const serverRoute = () => {
//   if (GLOBAL.ENV === ENV) {
//     router.use(express.static(PathDir.BUILD_LOC))
//     router.get('*', (req: Request, res: Response) =>
//       res.sendFile(PathDir.BUILD_VIEW)
//     )
//   } else {
//     router.get(PathDir.API_ROOT, RESPONSE.server)
//   }
// }

// export default serverRoute
