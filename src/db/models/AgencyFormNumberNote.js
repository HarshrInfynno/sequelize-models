const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agency_form_number_note', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    agency_form_number_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_form_numbers',
        key: 'id'
      }
    }
  }, {
    tableName: 'agency_form_number_note',
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
    ]
  });
};
