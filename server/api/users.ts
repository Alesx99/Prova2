import { prisma } from '../utils/prisma'

export default defineEventHandler(async (event) => {
  const method = getMethod(event)
  
  switch (method) {
    case 'GET':
      try {
        const users = await prisma.user.findMany({
          orderBy: { createdAt: 'desc' }
        })
        return users
      } catch (error) {
        throw createError({
          statusCode: 500,
          statusMessage: 'Failed to fetch users'
        })
      }
      
    case 'POST':
      try {
        const body = await readBody(event)
        const { email, name } = body
        
        if (!email) {
          throw createError({
            statusCode: 400,
            statusMessage: 'Email is required'
          })
        }
        
        const user = await prisma.user.create({
          data: { email, name }
        })
        return user
      } catch (error) {
        throw createError({
          statusCode: 500,
          statusMessage: 'Failed to create user'
        })
      }
      
    default:
      throw createError({
        statusCode: 405,
        statusMessage: 'Method not allowed'
      })
  }
}) 