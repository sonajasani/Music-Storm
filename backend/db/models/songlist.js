'use strict';
module.exports = (sequelize, DataTypes) => {
  const SongList = sequelize.define('SongList', {
    songId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  SongList.associate = function(models) {
    SongList.belongsTo(models.Song, {foreignKey: 'songId'})
    SongList.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return SongList;
};