import fastify from 'fastify'
import { transactionsRoutes } from './http/controllers/transactions/routes'

export const app = fastify()

app.register(transactionsRoutes)
