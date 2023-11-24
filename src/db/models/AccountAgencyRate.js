const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('account_agency_rate', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    agency_info_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    account_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    account_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    wf_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    major_rate: {
      type: DataTypes.DOUBLE(12,6),
      allowNull: true
    },
    minor_rate_1: {
      type: DataTypes.DOUBLE(12,6),
      allowNull: true
    },
    minor_rate_2: {
      type: DataTypes.DOUBLE(12,6),
      allowNull: true
    },
    minor_rate_3: {
      type: DataTypes.DOUBLE(12,6),
      allowNull: true
    },
    total_rate: {
      type: DataTypes.DOUBLE(12,6),
      allowNull: true
    },
    major_rate_status: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "Pending"
    },
    minor_rate_1_status: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "Pending"
    },
    minor_rate_2_status: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "Pending"
    },
    minor_rate_3_status: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "Pending"
    },
    sdi_rate: {
      type: DataTypes.DOUBLE(12,6),
      allowNull: true
    },
    rate_change_reason: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    approved_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    rejected_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    verification_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "Pending"
    },
    is_override_rate: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    override_rate: {
      type: DataTypes.DOUBLE(12,6),
      allowNull: true
    },
    override_rate_notes_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    is_active: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
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
    tableName: 'account_agency_rates',
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
    ]
  });
};
