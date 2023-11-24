const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accounts_data_connectPay_datum', {
    account_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    non_zero_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    zero_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'accounts_data_connectPay_data',
    timestamps: false
  });
};
