
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('songs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('songs').insert([
        { name: 'In The End', genre: 'Rock', artist: 'Linkin Park', length: 234, song: 's3://songs/linkin_park_in_the_end', ranking: 5 },
      ]);
    });
};
