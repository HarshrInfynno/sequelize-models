const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('poa_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    has_fax: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    has_email: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    has_upload: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    has_mail: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    fax: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    upload_website: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    help_website: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    required_to_file: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    required_to_contact: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    address_description: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    state: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    zipcode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    used_for: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    agency_type: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    issuing_agency: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'poa_info',
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
        name: "id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "state_foreign",
        using: "BTREE",
        fields: [
          { name: "state" },
        ]
      },
    ]
  });
};
