import { User } from '@prisma/client'

export type State = {
  users: User[] | null
}

export const state: State = {
  users: null,
}
