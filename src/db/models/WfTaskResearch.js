const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wf_task_research', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    wf_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'wf_info',
        key: 'id'
      }
    },
    workflow_task_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    workflow_situation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    who_caused_issue: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    what_department_caused_issue: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    expect_sequential_notice: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    what_caused_issue: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    what_corrective_actions_taken: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    what_department_responsible_for_corrective_actions: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    what_form_used_to_resolve_the_issue: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    inquiry_id: {
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
    tableName: 'wf_task_research',
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
        name: "wf_task_research_wf_info_id_index",
        using: "BTREE",
        fields: [
          { name: "wf_info_id" },
        ]
      },
    ]
  });
};
