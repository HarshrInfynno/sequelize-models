const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CMPId', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    }
  }, {
    tableName: 'CMPId',
    timestamps: false
  });
};
