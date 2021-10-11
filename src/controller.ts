import { pg_knex } from './db';
import Song from './model';

export async function getSong(id: string): Promise<Song> {
  const songs = await pg_knex('songs').where({ id: id });

  return songs[0];
}

export async function createSong(song: Song): Promise<Song> {
  const records = await pg_knex('songs').insert(song)

  console.log(records)

  return song;
}

export async function updateSong(id: string, song: Partial<Song>): Promise<Song> {
  const { id: throwawayId, ...restOfSong } = song;
  console.log(restOfSong);
  const records = await pg_knex('songs').where({ id: id }).update(restOfSong)

  const updatedSong = await getSong(id);

  console.log(updatedSong)

  return updatedSong
}