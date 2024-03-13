import { knex } from '../../../database'

export async function getSummaryController() {
  const summary = await knex('transactions')
    .sum('amount', { as: 'amount' })
    .first()

  return { summary }
}
