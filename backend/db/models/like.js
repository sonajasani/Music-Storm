'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    liked: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    songId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model : 'Songs', key: 'id'}
    },
    likerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model : 'Users', key: 'id'}
    }
  }, {});
  Like.associate = function(models) {
    // associations can be defined here
    Like.belongsTo(models.Song, {foreignKey: 'songId'})
    Like.belongsTo(models.User, {foreignKey: 'likerId'})
  };
  return Like;
};