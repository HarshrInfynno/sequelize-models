const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TEMP_account_info_detail', {
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
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    maxid: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    minid: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    qty: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'TEMP_account_info_details',
    timestamps: false
  });
};
