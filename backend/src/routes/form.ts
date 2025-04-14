import { FastifyInstance } from 'fastify'

import { Form as Entity } from '@prisma/client'

import prisma from '../db/db_client'
import { serializer } from './middleware/pre_serializer'
import { EntityId, IEntityId } from './schemas/common'
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
        const record = await prisma.form.findUniqueOrThrow({
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
        const records = await prisma.form.findMany()

        // Get count of SourceRecords grouped by formId
        const counts = await prisma.sourceRecord.groupBy({
          by: ['formId'],
          _count: {
            formId: true,
          },
        })

        // Create a map for quick lookup
        const countMap = counts.reduce((acc, curr) => {
          acc[curr.formId] = curr._count.formId
          return acc
        }, {} as Record<string, number>)

        // Combine form data with count
        const formsWithCounts = records.map(form => ({
          ...form,
          sourceRecordCount: countMap[form.id] || 0,
        }))

        reply.send(formsWithCounts)
      } catch (err: any) {
        log.error({ err }, err.message)
        throw new ApiError('failed to fetch ' + tableName, 400)
      }
    },
  })

  app.post<{
    Params: Entity
    Reply: Entity
  }>('/', {
    async handler(req, reply) {
      try {
        const { body } = req
        const { name, fields } = body as {
          name: string
          fields: any[]
        }

        if (!name || !fields) {
          throw app.httpErrors.badRequest(
            'Invalid input: Name and fields are required'
          )
        }

        const newData = { name, fields }

        const newForm = await prisma.form.create({
          data: newData,
        })

        return reply.status(201).send(newForm)
      } catch (error) {
        throw error
      }
    },
  })

  app.patch<{
    Params: IEntityId
    Reply: Entity
  }>('/:id', {
    async handler(req, reply) {
      const { params, body } = req
      const { id } = params
      const { name, fields } = body as {
        name: string
        fields: any[]
      }

      if (!id) {
        throw app.httpErrors.badRequest('Invalid input: id is required')
      }

      try {
        // Check if form exists
        const existingForm = await prisma.form.findUnique({
          where: { id },
        })

        if (!existingForm) {
          throw app.httpErrors.notFound('Invalid input: id not found')
        }

        // Update the form with any provided fields
        const updatedForm = await prisma.form.update({
          where: { id },
          data: {
            ...(name && { name }),
            ...(fields && { fields }),
          },
        })

        return reply.send(updatedForm)
      } catch (error) {
        throw error
      }
    },
  })
}

export default formRoutes
