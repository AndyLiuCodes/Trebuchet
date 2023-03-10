const { DataTypes } = require('sequelize');

const serverApplication = {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  isTracked: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    field: 'is_tracked',
  },
  syncFrequency: {
    type: DataTypes.INTEGER,
    field: 'sync_frequency',
  },
  applicationType: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'application_type',
  },
  serverImage: {
    type: DataTypes.BLOB,
    field: 'server_image',
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isFavourite: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'is_favourite',
  },
  position: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};

module.exports = (sequelize) => {
  return sequelize.define('ServerApplications', serverApplication);
};
