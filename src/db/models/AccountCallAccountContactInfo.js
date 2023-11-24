const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('account_call_account_contact_info', {
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
    account_contact_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    call_start: {
      type: DataTypes.DATE,
      allowNull: true
    },
    call_end: {
      type: DataTypes.DATE,
      allowNull: true
    },
    duration_seconds: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    call_note_ids: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    tableName: 'account_call_account_contact_info',
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
        name: "account_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "account_info_id" },
        ]
      },
    ]
  });
};
