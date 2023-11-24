const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wf_task_refund_due', {
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
    rd_is_refund_due: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rd_refund_due_reason: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rd_expected_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    rd_recieved_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    rd_refund_paid_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rd_refund_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    rd_refund_paid_to: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rd_refund_check_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rd_paid_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    rd_refund_expected_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    rd_refund_request_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    rd_refund_request_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rd_refund_due_tax_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    rd_refund_due_penalty_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    rd_refund_due_interest_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    rd_refund_due_total_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    rd_credit_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true
    },
    rd_total_refund: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    }
  }, {
    tableName: 'wf_task_refund_due',
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
        name: "wf_task_refund_due_wf_info_id_index",
        using: "BTREE",
        fields: [
          { name: "wf_info_id" },
        ]
      },
      {
        name: "wf_task_refund_due_co_info_id_index",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  });
};
