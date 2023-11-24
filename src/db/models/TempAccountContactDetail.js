const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TEMP_account_contact_detail', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    fax_number: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    co_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    account_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    primary_phone: {
      type: DataTypes.STRING(20),
      allowNull: true
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
    tableName: 'TEMP_account_contact_details',
    timestamps: false
  });
};
