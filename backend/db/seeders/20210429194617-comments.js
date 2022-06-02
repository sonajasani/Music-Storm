'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
    return queryInterface.bulkInsert('Comments', 
      [
        {
          comment: "i love this song",
          songId: 1,
          userId: 1
        },
        {
          comment: "i like this song",
          songId: 1,
          userId: 2
        },
        {
          comment: "awesome song",
          songId: 2,
          userId: 3
        },
      ], {});

    },
  
    down: (queryInterface, Sequelize) => {
  
        return queryInterface.bulkDelete('Comments', null, {});
    }
  };
  