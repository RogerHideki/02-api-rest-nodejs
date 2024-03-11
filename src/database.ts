import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

export const config: Knex.Config = {
  client: 'oracledb',
  connection: {
    user: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    connectString: env.DATABASE_CONNECT_STRING,
  },
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
