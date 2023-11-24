const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agency_rate', {
    agency_info_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    major_rate_description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    major_rate_tax_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    minor_rate_1_description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    minor_rate_1_tax_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    minor_rate_2_description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    minor_rate_2_tax_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    minor_rate_3_description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    minor_rate_3_tax_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sdi_rate_description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sdi_rate_tax_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'agency_rates',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "agency_info_id" },
        ]
      },
    ]
  });
};
