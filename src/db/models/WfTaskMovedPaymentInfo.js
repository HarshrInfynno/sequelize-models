const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wf_task_moved_payment_info', {
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
    is_payment_moved: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount_moved: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    reason_for_moved_payment: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    moved_from: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    moved_to: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_moved: {
      type: DataTypes.DATEONLY,
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
    tableName: 'wf_task_moved_payment_info',
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
        name: "wf_task_moved_payment_info_wf_info_id_index",
        using: "BTREE",
        fields: [
          { name: "wf_info_id" },
        ]
      },
    ]
  });
};
