const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accounts_data_connectPay_accountid', {
    accountid: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'accounts_data_connectPay_accountid',
    timestamps: false
  });
};
