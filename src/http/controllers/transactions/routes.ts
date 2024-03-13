import { FastifyInstance } from 'fastify'
import { create } from './create-transaction.controller'

export async function transactionsRoutes(app: FastifyInstance) {
  app.post('/transactions', create)
}
