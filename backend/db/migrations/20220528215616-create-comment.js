'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      songId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model : 'Songs', key: 'id'}
      },
      commenterId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model : 'Users', key: 'id'}
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Comments');
  }
};