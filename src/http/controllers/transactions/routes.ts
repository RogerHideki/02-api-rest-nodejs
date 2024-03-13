import { FastifyInstance } from 'fastify'
import { createController } from './create.controller'
import { fetchController } from './fetch.controller'
import { getByIdController } from './get-by-id.controller'
import { getSummaryController } from './get-summary.controller'

export async function transactionsRoutes(app: FastifyInstance) {
  app.post('/transactions', createController)
  app.get('/transactions', fetchController)
  app.get('/transactions/:id', getByIdController)
  app.get('/transactions/summary', getSummaryController)
}
