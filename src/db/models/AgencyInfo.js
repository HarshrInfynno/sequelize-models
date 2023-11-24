const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agency_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    country: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'agency_countries',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    abbreviation: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    iso_3166_2_code: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    expiration_date: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'agency_info',
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
        name: "agency_info_country_foreign",
        using: "BTREE",
        fields: [
          { name: "country" },
        ]
      },
    ]
  });
};
