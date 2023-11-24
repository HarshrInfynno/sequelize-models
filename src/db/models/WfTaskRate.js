const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wf_task_rate', {
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
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    major_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    major_rate: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    minor_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    minor_rate_1: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    minor_rate_2: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    override_rate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    total_rate_override: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    total_rate: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    sdi_rate: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    information_saved: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    verification_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    approval_type: {
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
    tableName: 'wf_task_rates',
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
        name: "wf_task_rates_wf_info_id_index",
        using: "BTREE",
        fields: [
          { name: "wf_info_id" },
        ]
      },
    ]
  });
};
