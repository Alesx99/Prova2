import { prisma } from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  const method = getMethod(event)
  const id = parseInt(getRouterParam(event, 'id') || '0')
  
  if (!id || isNaN(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid user ID'
    })
  }
  
  switch (method) {
    case 'GET':
      try {
        const user = await prisma.user.findUnique({
          where: { id }
        })
        
        if (!user) {
          throw createError({
            statusCode: 404,
            statusMessage: 'User not found'
          })
        }
        
        return user
      } catch (error) {
        throw createError({
          statusCode: 500,
          statusMessage: 'Failed to fetch user'
        })
      }
      
    case 'PUT':
      try {
        const body = await readBody(event)
        const { email, name } = body
        
        const user = await prisma.user.update({
          where: { id },
          data: { email, name }
        })
        
        return user
      } catch (error) {
        throw createError({
          statusCode: 500,
          statusMessage: 'Failed to update user'
        })
      }
      
    case 'DELETE':
      try {
        const user = await prisma.user.delete({
          where: { id }
        })
        
        return user
      } catch (error) {
        throw createError({
          statusCode: 500,
          statusMessage: 'Failed to delete user'
        })
      }
      
    default:
      throw createError({
        statusCode: 405,
        statusMessage: 'Method not allowed'
      })
  }
}) 