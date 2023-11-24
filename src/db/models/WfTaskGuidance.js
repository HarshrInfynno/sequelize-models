const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wf_task_guidance', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    workflow_task_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'wf_task_info',
        key: 'id'
      }
    },
    workflow_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'wf_info',
        key: 'id'
      }
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    wf_notes_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'wf_notes',
        key: 'id'
      }
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
    tableName: 'wf_task_guidance',
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
        name: "wf_task_guidance_workflow_info_foreign",
        using: "BTREE",
        fields: [
          { name: "workflow_info_id" },
        ]
      },
      {
        name: "wf_task_guidance_workflow_task_info_foreign",
        using: "BTREE",
        fields: [
          { name: "workflow_task_info_id" },
        ]
      },
      {
        name: "wf_task_guidance_wf+notes_foreign",
        using: "BTREE",
        fields: [
          { name: "wf_notes_id" },
        ]
      },
    ]
  });
};
