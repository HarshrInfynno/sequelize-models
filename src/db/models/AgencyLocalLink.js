const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agency_local_link', {
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
    description: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    agency_link_type_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'agency_link_type',
        key: 'id'
      }
    },
    used_for: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    expire_on: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
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
    }
  }, {
    tableName: 'agency_local_link',
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
        name: "agency_local_link_agency_local_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_local_id" },
        ]
      },
      {
        name: "agency_local_link_agency_link_type_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_link_type_id" },
        ]
      },
      {
        name: "agency_local_link_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "agency_local_link_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "agency_local_link_co_info_id_index",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  });
};
