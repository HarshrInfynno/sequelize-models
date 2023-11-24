const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agency_tax_forms_co_setting', {
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
    agency_tax_forms_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    assignee_contact_person: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assignee_contact_phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assignee_contact_fax: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assignee_co_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assignee_co_fein: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assignee_co_address_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assignee_co_address_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assignee_city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assignee_state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assignee_zip: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    assignee_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    account_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assignee_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    title_date_appointed: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'agency_tax_forms_co_settings',
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
