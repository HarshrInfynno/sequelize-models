const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wf_bulk_notice', {
    wf_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'wf_info',
        key: 'id'
      }
    },
    account_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'account_info',
        key: 'id'
      }
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'wf_bulk_notice',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "account_info_id" },
          { name: "wf_info_id" },
        ]
      },
      {
        name: "wf_info_account_info_uniqye",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "wf_info_id" },
          { name: "account_info_id" },
        ]
      },
    ]
  });
};
