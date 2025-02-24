'use strict';
module.exports = (sequelize, DataTypes) => {
  const Campaign = sequelize.define('Campaign', {
    campaignName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    redirectLink: {
      type: DataTypes.STRING,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Campaigns',
  });
  return Campaign;
};
