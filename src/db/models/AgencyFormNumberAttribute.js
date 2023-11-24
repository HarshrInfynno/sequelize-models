const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agency_form_number_attribute', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    agency_form_number_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_form_numbers',
        key: 'id'
      }
    },
    agency_form_keyword_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'agency_form_keyword_type',
        key: 'id'
      }
    },
    attribute: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    starts_after: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    word_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'agency_form_number_attribute',
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
        name: "agency_form_number_id",
        using: "BTREE",
        fields: [
          { name: "agency_form_number_id" },
        ]
      },
      {
        name: "agency_form_keyword_type_id",
        using: "BTREE",
        fields: [
          { name: "agency_form_keyword_type_id" },
        ]
      },
    ]
  });
};
