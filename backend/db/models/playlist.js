'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    song_id: DataTypes.INTEGER
  }, {});
  Playlist.associate = function(models) {
    // associations can be defined here
  };
  return Playlist;
};