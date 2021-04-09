import { makeSchema } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'

import * as Queries from '../queries'
import * as Mutations from '../mutations'
import * as Objects from '../objects'

export const schema = makeSchema({
  types: [Queries, Mutations, Objects],
  outputs: {
    schema: __dirname + '/schema.graphql',
    typegen: __dirname + '/../generated/nexus.ts',
  },
  nonNullDefaults: { input: true, output: true },
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  contextType: {
    module: require.resolve('../context'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
})
