// import * as uuidv4 from 'uuid';

enum GenreEnum {
  ROCK = "Rock",
  POP = "Pop",
  RAP = "Rap",
  RANDB = "R&B"
}

// once big enough, move to a folder with all other models
export default class Song {
  id!: string
  name: string
  genre: GenreEnum
  artist: string
  length: number
  song: string
  ranking: number
}

export type UUID = string;