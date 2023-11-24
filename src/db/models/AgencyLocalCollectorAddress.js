const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agency_local_collector_address', {
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
    agency_local_collector_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_local_collector',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    used_for: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    address_1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    address_2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    state: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    is_filing_address: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    agency_tax_type_id: {
      type: DataTypes.MEDIUMINT,
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
    website: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    old_agency_tax_type_id: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    country: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    tableName: 'agency_local_collector_address',
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
        name: "agency_local_collector_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_local_collector_id" },
        ]
      },
    ]
  });
};
