const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('account_communication', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    account_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'account_info',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    resource_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'account_communications',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "account_info_id_index",
        using: "BTREE",
        fields: [
          { name: "account_info_id" },
        ]
      },
      {
        name: "resource_id_index",
        using: "BTREE",
        fields: [
          { name: "resource_id" },
        ]
      },
    ]
  });
};
