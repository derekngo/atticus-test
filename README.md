# atticus-test

# Setup/Run
1. Install database
$ docker-compose up
$ psql -h localhost -p 5432 -U user -d songs

2. Setup db
$ npx knex migrate:latest # creates table
$ npx seed:run # inserts 1 row

3. Install dependencies and run app
$ npm install
$ npm run start

4. Use curl or some other REST client to validate
- [Postman Collection](https://www.getpostman.com/collections/3ee6bfd2e22b05eda13b)

# DB
$ npx knex migrate:make <INSERT_MIGRATION_NAME_HERE> # creates a new migration file

# TODO
- properly type uuid
- add updatedAt and createdAt for rows

# Roadmap
- better client error messages

# Stack
- Node (v15.7.0)
- Typescript (v4.4.3)
  - koa (server)
  - knex (pg connection)
- Docker
- PostgresQL