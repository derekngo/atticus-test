import { pg_knex } from './db';
import Song from './model';

export async function getSong(id: string): Promise<Song> {
  const songs = await pg_knex('songs').where({ id: id });

  return songs[0];
}

export async function createSong(song: Song): Promise<Song> {
  const records = await pg_knex('songs').insert(song)

  console.log(records)

  return song
}