'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Likes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      liked: {
        type: Sequelize.BOOLEAN,
        default: false
      },
      songId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model : 'Songs', key: 'id'}
      },
      likerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model : 'Users', key: 'id'}
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Likes');
  }
};