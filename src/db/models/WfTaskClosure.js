const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wf_task_closure', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    wf_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'wf_info',
        key: 'id'
      }
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'co_info',
        key: 'id'
      }
    },
    issuing_country: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    issuing_agency: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    agency_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rs_is_completed_timely: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rs_call_agency_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    rs_call_account_contact_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    rs_is_related_to_vendor: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rs_difficulty_level: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    rs_resolution_rating: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rs_created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    cl_close_notification_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cl_agent_talked_to: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cl_agent_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cl_was_issue_avoidable: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cl_issue_avoidable_action: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cl_is_followup_needed: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cl_type_of_followup: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cl_created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    workflow_task_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    afc_type_of_closure: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'wf_task_closure',
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
        name: "wf_task_closure_wf_info_id_index",
        using: "BTREE",
        fields: [
          { name: "wf_info_id" },
        ]
      },
      {
        name: "wf_task_closure_co_info_id_index",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  });
};
