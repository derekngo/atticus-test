import { pg_knex } from './db';
import Song from './model';

export async function getSong(id: string): Promise<Song> {
  const songs = await pg_knex('songs').where({ id: id });

  return songs[0];
}