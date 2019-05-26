const { GraphQLServer } = require('graphql-yoga')

let links = [
	
{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
},

{
  id: 'link-1',
  url: 'www.facebook.com',
  description: 'Welcome to facebook!'
},

{
  id: 'link-2',
  url: 'www.google.com',
  description: 'Welcome to google!'
},

]

const typeDefs = `
type Query {
  info: String!
  feed: [Link!]!
}

type Link {
  id: ID!
  description: String!
  url: String!
}
`

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
	feed: () => links,
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))

