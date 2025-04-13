import fastify from 'fastify'
import fastifySensible from '@fastify/sensible'

import formRoutes from './routes/form'
import sourceRecordRoutes from './routes/sourceRecord'
import errorHandler from './errors'

function build(opts = {}) {
  const app = fastify(opts)
  app.register(fastifySensible)

  app.register(formRoutes, { prefix: '/form' })
  app.register(sourceRecordRoutes, { prefix: '/source-record' })

  app.setErrorHandler(errorHandler)

  return app
}
export default build
