'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    songId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model : 'Songs', key: 'id'}
    },
    commenterId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model : 'Users', key: 'id'}
    }
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Song, {foreignKey: 'songId'})
    Comment.belongsTo(models.User, {foreignKey: 'commenterId'})
  };
  return Comment;
};