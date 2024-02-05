import 'reflect-metadata'
import express, { Router } from 'express'
import { PathDir } from '@constants'
import { Method, MetaKey } from '@enum'
// /**
//  * TODO: implement the linkAuthController function
//  * @param target - Controller class
//  * @returns - A function that takes in an app and assigns the pathRouter to the app
//  */
// export function linkAuthController(target: any) {
//   const pathRouter = Router()

//   for (const key in target.prototype) {
//     const routeHandler = target.prototype[key]
//     const path = Reflect.getMetadata(MetaKey.path, target.prototype, key)

//     if (path) {
//       pathRouter.get(path, routeHandler.bind(new target()))
//     }
//   }

//   return function (app: express.Application) {
//     app.use(PathDir.AUTH_ROOT, pathRouter)
//   }
// }

/**
 *
 * @param path  - The path for the route
 * @method      - GET
 * @returns  - A function that takes in a target and assigns the path to the target
 */

export function bindRoute(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetaKey.path, path, target, key)
      Reflect.defineMetadata(MetaKey.method, method, target, key)
    }
  }
}

export const get = bindRoute(Method.get)
export const post = bindRoute(Method.post)
export const put = bindRoute(Method.put)
export const del = bindRoute(Method.del)
export const patch = bindRoute(Method.patch)
export const options = bindRoute(Method.options)
