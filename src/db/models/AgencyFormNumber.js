const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agency_form_number', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    document_id: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'co_info',
        key: 'id'
      }
    },
    agency_countries_id: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    agency_info_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_info',
        key: 'id'
      }
    },
    agency_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    agency_dept_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    form_number: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "agency_form_numbers_form_bumber_unique"
    },
    filling_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    notice_type: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'sys_workflow',
        key: 'id'
      }
    },
    notes: {
      type: DataTypes.TEXT,
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
    s3_path: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    s3_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    csv_files_locations: {
      type: DataTypes.JSON,
      allowNull: true
    },
    document_processed: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    agency_local_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    agency_city_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    file_text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_conversion: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    last_four: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    form_configured: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    tax_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    filing_type_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    tax_type_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    old_filling_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'agency_form_numbers',
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
        name: "agency_form_numbers_form_bumber_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "form_number" },
        ]
      },
      {
        name: "agency_form_numbers_co_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "agency_form_numbers_agency_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_info_id" },
        ]
      },
      {
        name: "agency_form_numbers_notice_type_foreign",
        using: "BTREE",
        fields: [
          { name: "notice_type" },
        ]
      },
      {
        name: "agency_form_numbers_form_number_index",
        using: "BTREE",
        fields: [
          { name: "form_number" },
        ]
      },
    ]
  });
};
