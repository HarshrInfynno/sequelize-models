const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wf_task_abatement', {
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
      type: DataTypes.BIGINT,
      allowNull: false
    },
    abatement_tax_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    abatement_penalty_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    abatement_interest_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    abatement_total_amount: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    abatement_request_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    abatement_request_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    abatement_request_paid_pi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    abatement_response_is_approved: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    abatement_response_reason: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    abatement_response_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'wf_task_abatement',
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
        name: "wf_task_abatement_wf_info_id_index",
        using: "BTREE",
        fields: [
          { name: "wf_info_id" },
        ]
      },
    ]
  });
};
