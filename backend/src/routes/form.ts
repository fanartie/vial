import { FastifyInstance } from 'fastify'

import { Form as Entity } from '@prisma/client'

import prisma from '../db/db_client'
import { serializer } from './middleware/pre_serializer'
import { IEntityId } from './schemas/common'
import { ApiError } from '../errors'

async function formRoutes(app: FastifyInstance) {
  const tableName = 'form'

  app.setReplySerializer(serializer)

  const log = app.log.child({ component: tableName + 'Routes' })

  app.get<{
    Params: IEntityId
    Reply: Entity
  }>('/:id', {
    async handler(req, reply) {
      const { params } = req
      const { id } = params
      log.debug('get ' + tableName + ' by id')
      try {
        const record = await prisma[tableName].findUniqueOrThrow({
          where: { id },
        })
        reply.send(record)
      } catch (err: any) {
        log.error({ err }, err.message)
        throw new ApiError('failed to fetch ' + tableName, 400)
      }
    },
  })

  app.get<{
    Reply: Entity[]
  }>('/', {
    async handler(req, reply) {
      log.debug('get all ', tableName)
      try {
        const records = await prisma[tableName].findMany()
        reply.send(records)
      } catch (err: any) {
        log.error({ err }, err.message)
        throw new ApiError('failed to fetch ' + tableName, 400)
      }
    },
  })
}

export default formRoutes
