import { createHook } from 'overmind-react'
import * as user from './user'
import { namespaced } from 'overmind/config'
import { createOvermind, IConfig } from 'overmind'

export const config = namespaced({
  user,
})

declare module 'overmind' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Config extends IConfig<typeof config> {
    //
  }
}

export const overmind = createOvermind(config, {
  devtools: true, // defaults to 'localhost:3031'
})

export const useOvermind = createHook<typeof config>()
