'use strict';
module.exports = (sequelize, DataTypes) => {
  const PageBanner = sequelize.define('PageBanner', {
    bannerName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    redirectingPage: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'PageBanners',
  });
  return PageBanner;
};
