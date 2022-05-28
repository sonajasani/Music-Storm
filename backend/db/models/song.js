'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    audioFile: {
      allowNull: false,
      type: DataTypes.STRING
    },
    imageFile: {
      type: DataTypes.STRING
    },
    artist: {
      allowNull: false,
      type: DataTypes.STRING(20)
    },
    album: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  }, {});
  Song.associate = function(models) {
    Song.hasMany(models.Comment, {foreignKey: 'songId'})
    Song.hasMany(models.Like, {foreignKey: 'songId'})
    Song.hasMany(models.Playlist, {foreignKey: 'songId'})
    Song.belongsToMany(models.User, {through: 'Playlist',
    foreignKey: 'songId',
    otherKey: 'userId'})
  };
  return Song;
};