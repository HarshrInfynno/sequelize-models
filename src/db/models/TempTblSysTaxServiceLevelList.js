const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TEMP_tbl_sys_tax_service_level_list', {
    id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    maxid: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    qty: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'TEMP_tbl_sys_tax_service_level_list',
    timestamps: false
  });
};
