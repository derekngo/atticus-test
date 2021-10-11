import { pg_knex } from './db';
import Song from './model';
import { UUID } from './model';

export async function getSong(id: UUID): Promise<Song> {
  const songs = await pg_knex('songs').where({ id: id });

  return songs[0];
}

export async function createSong(song: Song): Promise<Song> {
  const records = await pg_knex('songs').insert(song)

  return song;
}

export async function updateSong(id: UUID, song: Partial<Song>): Promise<Song> {
  const { id: throwawayId, ...restOfSong } = song;

  const records = await pg_knex('songs').where({ id: id }).update(restOfSong)
  const updatedSong = await getSong(id);

  return updatedSong
}

export async function deleteSong(id: UUID): Promise<Song> {
  const params = { id: id };
  const song = await getSong(id);
  const records = await pg_knex.raw('delete from songs where id = :id', params);

  return song;
}