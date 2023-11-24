const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accounts_data_connectPay_name', {
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'accounts_data_connectPay_name',
    timestamps: false
  });
};
