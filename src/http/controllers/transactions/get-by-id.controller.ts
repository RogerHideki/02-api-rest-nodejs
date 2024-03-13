import { FastifyRequest } from 'fastify'
import { z } from 'zod'
import { knex } from '../../../database'

export async function getByIdController(request: FastifyRequest) {
  const getTransactionParamsSchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = getTransactionParamsSchema.parse(request.params)

  const transaction = await knex('transactions').where('id', id).first()

  return { transaction }
}
