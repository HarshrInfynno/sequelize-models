const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ocr_multiple_tax_period', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ocr_scanned_documents_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    qtr1: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    qtr2: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    qtr3: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    qtr4: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    jan: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    feb: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    mar: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    apr: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    may: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    jun: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    jul: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    aug: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    sep: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    oct: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    nov: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    dec: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    annual: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
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
    tableName: 'ocr_multiple_tax_periods',
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
        name: "workflow_notice_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "ocr_scanned_documents_id" },
        ]
      },
    ]
  });
};
