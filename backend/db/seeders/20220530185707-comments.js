'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
    return queryInterface.bulkInsert('Comments', 
      [
        {
          content: "i love this song",
          songId: 1,
          commenterId: 1
        },
        {
          content: "i like this song",
          songId: 1,
          commenterId: 2
        },
        {
          content: "awesome song",
          songId: 2,
          commenterId: 3
        },
        {
          content: "i love this song",
          songId: 2,
          commenterId: 1
        },
        {
          content: "nice",
          songId: 3,
          commenterId: 1
        },
        {
          content: "good song",
          songId: 3,
          commenterId: 3
        },
        {
          content: "i love this song",
          songId: 4,
          commenterId: 2
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 4,
          commenterId: 3
        },
        {
          content: "Such a great song overall",
          songId: 5,
          commenterId: 1
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 5,
          commenterId: 2
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 6,
          commenterId: 1
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 6,
          commenterId: 2
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 7,
          commenterId: 2
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 7,
          commenterId: 3
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 8,
          commenterId: 3
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 8,
          commenterId: 1
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 9,
          commenterId: 1
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 9,
          commenterId: 2
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 10,
          commenterId: 2
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 10,
          commenterId: 3
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 11,
          commenterId: 3
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 11,
          commenterId: 1
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 12,
          commenterId: 1
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 12,
          commenterId: 2
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 13,
          commenterId: 2
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 13,
          commenterId: 3
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 14,
          commenterId: 3
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 14,
          commenterId: 1
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 15,
          commenterId: 1
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 15,
          commenterId: 2
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 16,
          commenterId: 2
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 16,
          commenterId: 3
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 17,
          commenterId: 3
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 17,
          commenterId: 1
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 18,
          commenterId: 1
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 18,
          commenterId: 2
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 19,
          commenterId: 2
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 19,
          commenterId: 3
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 20,
          commenterId: 3
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 20,
          commenterId: 1
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 21,
          commenterId: 1
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 21,
          commenterId: 2
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 22,
          commenterId: 2
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 22,
          commenterId: 3
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 23,
          commenterId: 3
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 23,
          commenterId: 1
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 24,
          commenterId: 1
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 24,
          commenterId: 2
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 25,
          commenterId: 2
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 25,
          commenterId: 3
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 26,
          commenterId: 3
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 26,
          commenterId: 1
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 27,
          commenterId: 1
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 27,
          commenterId: 2
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 28,
          commenterId: 2
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 28,
          commenterId: 3
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 29,
          commenterId: 3
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 29,
          commenterId: 1
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 30,
          commenterId: 1
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 30,
          commenterId: 2
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 31,
          commenterId: 2
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 31,
          commenterId: 3
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 32,
          commenterId: 3
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 32,
          commenterId: 1
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 33,
          commenterId: 1
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 33,
          commenterId: 2
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 34,
          commenterId: 2
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 34,
          commenterId: 3
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 35,
          commenterId: 3
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 35,
          commenterId: 1
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 36,
          commenterId: 1
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 36,
          commenterId: 2
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 37,
          commenterId: 2
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 37,
          commenterId: 3
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 38,
          commenterId: 3
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 38,
          commenterId: 1
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 39,
          commenterId: 1
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 39,
          commenterId: 2
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 40,
          commenterId: 2
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 40,
          commenterId: 3
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 41,
          commenterId: 3
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 41,
          commenterId: 1
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 42,
          commenterId: 1
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 42,
          commenterId: 2
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 43,
          commenterId: 2
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 43,
          commenterId: 3
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 44,
          commenterId: 3
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 44,
          commenterId: 1
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 45,
          commenterId: 1
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 45,
          commenterId: 2
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 46,
          commenterId: 2
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 46,
          commenterId: 3
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 47,
          commenterId: 3
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 47,
          commenterId: 1
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 48,
          commenterId: 1
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 48,
          commenterId: 2
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 49,
          commenterId: 2
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 49,
          commenterId: 3
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 50,
          commenterId: 3
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 50,
          commenterId: 1
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 51,
          commenterId: 1
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 51,
          commenterId: 2
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 52,
          commenterId: 2
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 52,
          commenterId: 3
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 53,
          commenterId: 3
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 53,
          commenterId: 1
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 54,
          commenterId: 1
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 54,
          commenterId: 2
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 55,
          commenterId: 2
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 55,
          commenterId: 3
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 56,
          commenterId: 3
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 56,
          commenterId: 1
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 57,
          commenterId: 1
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 57,
          commenterId: 2
        },
        {
          content: "before I started listening :| while i was listening :) after listening to this song :D thanks for this song I LOVE it",
          songId: 58,
          commenterId: 2
        },
        {
          content: "Oh My.. you got me with the very first song... I love that song!!! I got goosebumps all over",
          songId: 58,
          commenterId: 3
        },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Comments', null, {});
  }
};
