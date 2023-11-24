const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agency_local_address', {
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
    agency_local_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_local',
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
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'app_user_info',
        key: 'id'
      }
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'app_user_info',
        key: 'id'
      }
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
    tableName: 'agency_local_address',
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
        name: "agency_local_address_agency_local_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_local_id" },
        ]
      },
      {
        name: "agency_local_address_state_foreign",
        using: "BTREE",
        fields: [
          { name: "state" },
        ]
      },
      {
        name: "agency_local_address_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "agency_local_address_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "agency_local_address_co_info_id_index",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  });
};
