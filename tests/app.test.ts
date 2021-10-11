import { pg_knex } from '../src/db'

describe('database functions', () => {
  test('put', async () => {
    const input = {
      name: 'Africa',
      genre: 'Pop',
      artist: 'Toto',
      length: 125,
      song: 's3://songs/africa_toto',
      ranking: 5
    }

    const all_songs = await pg_knex('songs').select();

    const result = await pg_knex('songs').insert(input);

    const result_songs = await pg_knex('songs').select();

    expect(result).toBeTruthy()
    expect(result_songs.length).toBe(all_songs.length + 1)
  });
});