const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sys_workflow_task', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    sys_workflow_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'sys_workflow',
        key: 'id'
      }
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
    assigned_to: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
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
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    template_letter: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    include_totals_page: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    tableName: 'sys_workflow_tasks',
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
        name: "sys_workflow_tasks_sys_workflow_id_foreign",
        using: "BTREE",
        fields: [
          { name: "sys_workflow_id" },
        ]
      },
      {
        name: "sys_workflow_tasks_sys_task_definition_id_foreign",
        using: "BTREE",
        fields: [
          { name: "sys_task_definition_id" },
        ]
      },
    ]
  });
};
