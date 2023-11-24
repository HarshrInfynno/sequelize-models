const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('co_ocr_sync_setting', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    auto_sync: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    account: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    notice_type: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    agency_dept_local_city: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    tax_year: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    tax_period: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    agency_type: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    agency: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    tax_amount: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    agency_due_date: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    agency_id_to_use: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    issue_date: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    notice_form: {
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
    tableName: 'co_ocr_sync_settings',
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
