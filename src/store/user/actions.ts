import { Context } from '..'

export const onInitializeOvermind = async ({ state }: Context): Promise<void> => {
  console.log(state.user.empty)
}
