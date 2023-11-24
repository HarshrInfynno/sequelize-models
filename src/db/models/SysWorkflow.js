const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sys_workflow', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'co_info',
        key: 'id'
      }
    },
    tax_type_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    sys_workflow_type_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'sys_workflow_type',
        key: 'id'
      }
    },
    assignment_type: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "workflow-manager"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sys_difficulty_level_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'sys_difficulty_level',
        key: 'id'
      }
    },
    sys_priority_list_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'sys_priority_list',
        key: 'id'
      }
    },
    company_followup_enabled: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    company_followup_days: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    company_due_date_enabled: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    company_due_date_days: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    agency_due_date_enabled: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    agency_due_date_days: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    parent: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    auto_letters_option: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    cause_of_workflow_option: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    corrective_action_option: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    account_agency_letter_option: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'sys_workflow',
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
        name: "sys_workflow_sys_workflow_type_id_foreign",
        using: "BTREE",
        fields: [
          { name: "sys_workflow_type_id" },
        ]
      },
      {
        name: "sys_workflow_sys_difficulty_level_id_foreign",
        using: "BTREE",
        fields: [
          { name: "sys_difficulty_level_id" },
        ]
      },
      {
        name: "sys_workflow_sys_priority_list_id_foreign",
        using: "BTREE",
        fields: [
          { name: "sys_priority_list_id" },
        ]
      },
      {
        name: "sys_workflow_co_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  });
};
