const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TEMP_tbl_account_agency_data_detail', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    account_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    agency_info_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false
    },
    co_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
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
    tableName: 'TEMP_tbl_account_agency_data_details',
    timestamps: false
  });
};
