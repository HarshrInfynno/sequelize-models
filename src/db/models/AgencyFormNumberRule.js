const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agency_form_number_rule', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    agency_form_number_attribute_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'agency_form_number_attribute',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    option_1: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    option_2: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'co_info',
        key: 'id'
      }
    }
  }, {
    tableName: 'agency_form_number_rules',
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
        name: "agency_form_number_attribute_id",
        using: "BTREE",
        fields: [
          { name: "agency_form_number_attribute_id" },
        ]
      },
      {
        name: "co_info_id",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  });
};
