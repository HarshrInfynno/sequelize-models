const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agency_department_contact', {
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
    agency_department_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_department',
        key: 'id'
      }
    },
    agency_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    used_for: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    agent_id: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    primary_phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ext: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
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
    address_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'agency_department_address',
        key: 'id'
      }
    }
  }, {
    tableName: 'agency_department_contact',
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
        name: "agency_department_contact_co_info_id_index",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
      {
        name: "agency_department_contact_agency_department_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_department_id" },
        ]
      },
      {
        name: "agency_department_contact_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "agency_department_contact_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "agency_department_contact_address_id_foreign",
        using: "BTREE",
        fields: [
          { name: "address_id" },
        ]
      },
    ]
  });
};
