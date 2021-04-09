import { extendType } from 'nexus'

export const hello = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.field('Hello', {
      type: 'String',
      resolve: (parent, args, ctx) => {
        return 'World'
      },
    })
  },
})
