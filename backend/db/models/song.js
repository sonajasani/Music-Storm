"use strict";
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define(
    "Song",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      audioFile: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      artist: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      album: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  Song.associate = function (models) {
    
    Song.hasMany(models.Comment, { foreignKey: "songId" });
    
    Song.belongsToMany(models.User, { through: 'SongsList',
    as:'songs', foreignKey: 'songId', otherKey: 'userId' });
     
  };

  Song.getCurrentSongById = async function (id) {
    return await Song.scope("currentSong").findByPk(id);
  };

  return Song;
};
