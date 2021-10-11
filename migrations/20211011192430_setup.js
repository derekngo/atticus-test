
exports.up = async function (knex) {
  await knex.raw(`
    CREATE EXTENSION IF NOT EXISTS pgcrypto;
    DROP TABLE IF EXISTS songs;
    CREATE TYPE GENRE_ENUM AS ENUM('Rock', 'Pop', 'Rap', 'R&B');
    CREATE TABLE songs(
      id uuid DEFAULT gen_random_uuid(),
      name VARCHAR,
      genre GENRE_ENUM,
      artist VARCHAR,
      length integer,
      song text,
      ranking smallint,
      PRIMARY KEY (id)
    );`);

};

exports.down = async function (knex) {
  await knex.raw(`
    DROP EXTENSION pgcrypto;
    DROP TABLE IF EXISTS users;
  `);
};
