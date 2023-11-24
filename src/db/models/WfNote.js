const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wf_note', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    workflow_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    workflow_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'wf_info',
        key: 'id'
      }
    },
    workflow_task_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    note_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    visible_account_contact: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    notify_account_contact: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    contacts: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    salesforce_notes_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    zendesk_notes_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cc_manager: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    tableName: 'wf_notes',
    hasTrigger: true,
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
        name: "workflow_info_id_index",
        using: "BTREE",
        fields: [
          { name: "workflow_info_id" },
        ]
      },
      {
        name: "workflow_task_info_id_index",
        using: "BTREE",
        fields: [
          { name: "workflow_task_info_id" },
        ]
      },
    ]
  });
};
