import { extendType, nonNull, stringArg } from 'nexus'

export const testMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('testMutation', {
      type: 'String',
      resolve: async (parent,_, ctx) => {
        return "Hello World"
      },
    })
  },
})
