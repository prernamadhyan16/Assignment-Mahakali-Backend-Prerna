'use strict';
module.exports = (sequelize, DataTypes) => {
  const TopCategoryImage = sequelize.define('TopCategoryImage', {
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'TopCategoryImages',
  });
  return TopCategoryImage;
};
