const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agency_country', {
    id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    country_code: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    iso_code: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    alpha2_code: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    numeric_code: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    calling_code: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    tableName: 'agency_countries',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
