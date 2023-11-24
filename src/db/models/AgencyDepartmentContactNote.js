const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agency_department_contact_note', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    agency_department_contact_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_department_contact',
        key: 'id'
      }
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
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
    }
  }, {
    tableName: 'agency_department_contact_note',
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
        name: "agency_department_contact_note_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "agency_department_contact_note_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "dept_contact_id_foreign",
        using: "BTREE",
        fields: [
          { name: "agency_department_contact_id" },
        ]
      },
    ]
  });
};
