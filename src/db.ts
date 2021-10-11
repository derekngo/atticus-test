import { Knex } from "knex";

export const pg_knex: Knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'user',
    password: 'pass',
    database: 'songs'
  },
  pool: { min: 0, max: 7 }
})
