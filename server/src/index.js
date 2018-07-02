const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')

// This is the resolver function, for the application
// side of the server (application layer)
const resolvers = {
  Query: {
    info: () => 'this is the API for Github Ryno',
    followers: (root, args, context, info) => {
      return context.db.query.followers({}, info)
    },
  },
  Mutation: {
    // New Follower resolver
    newFollower: (root, args, context, info) => {
      return context.db.mutation.createFollower({
        data: {
          login: args.login
        },
      }, info)
    }
  }
}

// see https://github.com/prismagraphql/prisma/issues/2225
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'https://us1.prisma.sh/public-blueguardian-546/github-node/dev',
      secret: 'mysecret123',
      debug: true,
    }),
  }),
})
server.start(() => console.log('Server is running on http://localhost:4000'))