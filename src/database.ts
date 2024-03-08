import { knex as setupKnex, Knex } from 'knex'

export const config: Knex.Config = {
  client: 'oracledb',
  connection: {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    connectString: process.env.DATABASE_CONNECT_STRING,
  },
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
