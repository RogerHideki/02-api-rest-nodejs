import { knex } from '../../../database'

export async function fetchController() {
  const transactions = await knex('transactions').select()

  return { transactions }
}
