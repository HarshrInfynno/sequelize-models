const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TEMP_tbl_account_data_detail', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    account_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ants_client_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    maxid: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    qty: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'TEMP_tbl_account_data_details',
    timestamps: false
  });
};
