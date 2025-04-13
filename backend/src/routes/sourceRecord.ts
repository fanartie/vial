import { FastifyInstance } from 'fastify'

import { SourceRecord as Entity } from '@prisma/client'

import prisma from '../db/db_client'
import { serializer } from './middleware/pre_serializer'
import { IEntityId } from './schemas/common'
import { ApiError } from '../errors'

async function sourceRecordRoutes(app: FastifyInstance) {
  const tableName = 'sourceRecord'

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
          include: {
            sourceData: true,
          },
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
        const records = await prisma[tableName].findMany({
          include: {
            sourceData: true,
          },
        })
        reply.send(records)
      } catch (err: any) {
        log.error({ err }, err.message)
        throw new ApiError('failed to fetch ' + tableName, 400)
      }
    },
  })

  app.post<{
    Params: any
    Reply: Entity
  }>('/', {
    async handler(req, reply) {
      const { body } = req
      log.debug('create ' + tableName)
      try {
        if (!body) {
          throw app.httpErrors.badRequest('Invalid input')
        }

        const { formId, sourceData } = body as {
          formId: string
          sourceData: { question: string; answer: string }[]
        }

        // Validate basic input
        if (!formId || !Array.isArray(sourceData) || sourceData.length === 0) {
          throw app.httpErrors.badRequest(
            'Invalid input: formId and sourceData are required'
          )
        }

        // Check that the form exists
        const formExists = await prisma.form.findUnique({
          where: { id: formId },
        })

        if (!formExists) {
          throw app.httpErrors.notFound('Form not found')
        }

        // Create SourceRecord and related SourceData
        const sourceRecord = await prisma.sourceRecord.create({
          data: {
            formId,
            sourceData: {
              create: sourceData.map(item => ({
                question: item.question,
                answer: item.answer,
              })),
            },
          },
          include: {
            sourceData: true,
          },
        })

        return reply.status(201).send(sourceRecord)
      } catch (err: any) {
        log.error({ err }, err.message)
        throw err
      }
    },
  })
}

export default sourceRecordRoutes
