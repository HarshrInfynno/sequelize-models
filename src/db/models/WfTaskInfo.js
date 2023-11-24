const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wf_task_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    account_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    workflow_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    workflow_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    sys_task_definition_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'sys_task_definition',
        key: 'id'
      }
    },
    order: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    days_open: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    due_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    assigned_to: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'app_user_info',
        key: 'id'
      }
    },
    skip: {
      type: DataTypes.JSON,
      allowNull: true
    },
    enabled_skip: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    assignment: {
      type: DataTypes.JSON,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    total_time_spent_in_seconds: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    task_complete_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    task_open_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    total_options: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    completed_options: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    task_opened_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    task_completed_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    pv_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pv_template_letter: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    pv_include_totals_page: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    has_guidance: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    is_skipped: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    rule_type_id_1: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    rule_type_option_value_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assignment_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    rule_assignment_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    assignment_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'wf_task_info',
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
        name: "workflow_task_info_sys_task_definition_id_foreign",
        using: "BTREE",
        fields: [
          { name: "sys_task_definition_id" },
        ]
      },
      {
        name: "workflow_task_info_assigned_to_foreign",
        using: "BTREE",
        fields: [
          { name: "assigned_to" },
        ]
      },
      {
        name: "workflow_task_info_workflow_info_id_index",
        using: "BTREE",
        fields: [
          { name: "workflow_info_id" },
        ]
      },
      {
        name: "workflow_task_info_order_index",
        using: "BTREE",
        fields: [
          { name: "order" },
        ]
      },
      {
        name: "workflow_task_info_status_index",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
    ]
  });
};
