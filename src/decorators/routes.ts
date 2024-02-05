import 'reflect-metadata'
import express, { Router } from 'express'
import { PathDir } from '@constants'
import { conNex } from '@utils'
import AppRouter from '@app-router'

// export const router = express.Router()
const app = express()

/**
 * TODO: implement the linkAuthController function
 * @param target - Controller class
 * @returns - A function that takes in an app and assigns the pathRouter to the app
 */
export function linkAuthController(target: any) {
  const pathRouter = Router()

  for (const key in target.prototype) {
    const routeHandler = target.prototype[key]
    const path = Reflect.getMetadata('path', target.prototype, key)

    if (path) {
      pathRouter.get(path, routeHandler.bind(new target()))
    }
  }

  return function (app: express.Application) {
    app.use(PathDir.AUTH_ROOT, pathRouter)
  }
}

/**
 *
 * @param routePrefix - The prefix for the route
 * @returns - A function that takes in a target and assigns the routeHandler to the router
 */
export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.instance

    Object.getOwnPropertyNames(target.prototype).forEach((key) => {
      const routeHandler = target.prototype[key]
      const path = Reflect.getMetadata('path', target.prototype, key)

      if (path) {
       let connectedPath = conNex(PathDir.API_ROOT, routePrefix, path)
        router.get(connectedPath, routeHandler)
      }
    })
  }
}

/**
 *
 * @param path - The path for the route
 * @returns  - A function that takes in a target and assigns the path to the target
 */
export function get(path: string) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata('path', path, target, key);
  }
}
