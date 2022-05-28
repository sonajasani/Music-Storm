'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    audio_file: DataTypes.STRING,
    image_file: DataTypes.STRING,
    artist_id: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
  };
  return Song;
};