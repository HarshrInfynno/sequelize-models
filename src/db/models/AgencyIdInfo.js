const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agency_id_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    agency_info_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_info',
        key: 'id'
      }
    },
    agency_id_types_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    tax_type_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    format: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    required: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    submittal_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'agency_id_info',
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
        name: "agency_info_agency_id_foreign_key",
        using: "BTREE",
        fields: [
          { name: "agency_info_id" },
        ]
      },
    ]
  });
};
