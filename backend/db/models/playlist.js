'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    name: {
      allowNull: false,
      type: Database.STRING(30)
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users', key: 'id'}
    },
    songId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Songs', key: 'id'}
    }
  }, {});
  Playlist.associate = function(models) {
    // associations can be defined here
    Playlist.belongsTo(models.Song, {foreignKey: 'songId'})
    Playlist.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Playlist;
};