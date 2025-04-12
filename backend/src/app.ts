import fastify from 'fastify'

import formRoutes from './routes/form'
import sourceRecordRoutes from './routes/sourceRecord'
import sourceDataRoutes from './routes/sourceData'
import errorHandler from './errors'

function build(opts = {}) {
  const app = fastify(opts)

  app.register(formRoutes, { prefix: '/form' })
  app.register(sourceRecordRoutes, { prefix: '/sourceRecord' })
  app.register(sourceDataRoutes, { prefix: '/sourceData' })

  app.setErrorHandler(errorHandler)

  return app
}
export default build
