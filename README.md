# atticus-test

$ docker-compose up
$ psql -h localhost -p 5432 -U user -d songs

$ npm install
$ tsc


# DB
$ npx knex migrate:make setup
$ npx knex migrate:latest


# TODO
- properly type uuid
- add updatedAt and createdAt for rows

# Roadmap
- better client error messages