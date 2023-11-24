const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('account_contact_group_linking', {
    account_contact_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'account_contact_info',
        key: 'id'
      }
    },
    workflow_list_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'workflow_lists',
        key: 'id'
      }
    },
    account_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'account_contact_group_linking',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "account_contact_info_id" },
          { name: "workflow_list_id" },
        ]
      },
      {
        name: "account_contact_linking_workflow_list_id_foreign",
        using: "BTREE",
        fields: [
          { name: "workflow_list_id" },
        ]
      },
      {
        name: "account_contact_info_id_workflow_list_id_index",
        using: "BTREE",
        fields: [
          { name: "account_contact_info_id" },
          { name: "workflow_list_id" },
        ]
      },
    ]
  });
};
