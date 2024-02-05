import 'reflect-metadata'
import { PathDir } from '@constants'
import { conNex } from '@utils'
import AppRouter from '@app-router'
import { Method, MetaKey } from '@enum'

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
      const path = Reflect.getMetadata(MetaKey.path, target.prototype, key)
      const method: Method = Reflect.getMetadata(
        MetaKey.method,
        target.prototype,
        key
      )

      if (path) {
        let connectedPath = conNex(PathDir.API_ROOT, routePrefix, path)
        router[method](connectedPath, routeHandler)
      }
    })
  }
}