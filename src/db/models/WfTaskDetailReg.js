const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wf_task_detail_reg', {
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
    what_caused_the_issue: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    what_corrective_actions_taken: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    submitted_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    submitted_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    tax_system_update_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    payroll_system_update_date: {
      type: DataTypes.DATE,
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
    is_registration_completed: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pin: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'wf_task_detail_reg',
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
        name: "wf_info_wf_task_detail_reg_foreign",
        using: "BTREE",
        fields: [
          { name: "wf_info_id" },
        ]
      },
      {
        name: "co_info_wf_task_detail_reg_foreign",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  });
};
