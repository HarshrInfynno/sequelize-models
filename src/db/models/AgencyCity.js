const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agency_city', {
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
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    filling_type_id: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "app_usage_types.id"
    },
    agency_tax_type_id: {
      type: DataTypes.MEDIUMINT,
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
    tax_collector_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'agency_local_collector',
        key: 'id'
      }
    },
    old_filling_type_id: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    old_agency_tax_type_id: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    }
  }, {
    tableName: 'agency_city',
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
        name: "agency_city_co_info_id_agency_info_id_name_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
          { name: "agency_info_id" },
          { name: "name" },
        ]
      },
      {
        name: "agency_city_agency_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_info_id" },
        ]
      },
      {
        name: "agency_city_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "agency_city_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "agency_city_tax_collector_id_foreign",
        using: "BTREE",
        fields: [
          { name: "tax_collector_id" },
        ]
      },
    ]
  });
};