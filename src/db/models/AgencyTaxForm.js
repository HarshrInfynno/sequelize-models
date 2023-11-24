const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agency_tax_form', {
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
    agency_info_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_info',
        key: 'id'
      }
    },
    tax_form: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    filling_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rev_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rev_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    year: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    document_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    file: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    required_to_file: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    required_to_contact: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    use_fed_form: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    used_for: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    expires_after: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "In Years"
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    form_fields: {
      type: DataTypes.JSON,
      allowNull: true
    },
    sign_settings: {
      type: DataTypes.JSON,
      allowNull: true
    },
    submission_site: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    form_site: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    submission_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tax_type_id: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    old_tax_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    country: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    state: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    notary_req: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'agency_tax_forms',
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
        name: "agency_tax_forms_co_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "agency_tax_forms_agency_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_info_id" },
        ]
      },
    ]
  });
};
