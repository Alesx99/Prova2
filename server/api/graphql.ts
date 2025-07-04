import { ApolloServer } from 'apollo-server'
import { gql } from 'graphql-tag'
import { prisma } from '../utils/prisma'

const typeDefs = gql`
  type User {
    id: Int!
    email: String!
    name: String
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    users: [User!]!
    user(id: Int!): User
  }

  type Mutation {
    createUser(email: String!, name: String): User!
    updateUser(id: Int!, email: String, name: String): User!
    deleteUser(id: Int!): User!
  }
`

const resolvers = {
  Query: {
    users: async () => {
      return await prisma.user.findMany({
        orderBy: { createdAt: 'desc' }
      })
    },
    user: async (_: any, { id }: { id: number }) => {
      return await prisma.user.findUnique({
        where: { id }
      })
    }
  },
  Mutation: {
    createUser: async (_: any, { email, name }: { email: string; name?: string }) => {
      return await prisma.user.create({
        data: { email, name }
      })
    },
    updateUser: async (_: any, { id, email, name }: { id: number; email?: string; name?: string }) => {
      return await prisma.user.update({
        where: { id },
        data: { email, name }
      })
    },
    deleteUser: async (_: any, { id }: { id: number }) => {
      return await prisma.user.delete({
        where: { id }
      })
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    req,
    prisma
  })
})

export default defineEventHandler(async (event) => {
  const { req, res } = event.node
  await server.start()
  
  const handler = server.createHandler({
    path: '/api/graphql'
  })
  
  return new Promise((resolve) => {
    handler(req, res, () => {
      resolve(undefined)
    })
  })
}) 