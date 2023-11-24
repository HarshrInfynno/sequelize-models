const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_account_agency', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    account_info: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    agency_info: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ein: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deposit_frequency: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deposit_method: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    account_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    withholding_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    taxpayer_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    unemployment_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    start_date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    end_date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    internal_id_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    internal_id_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    agency_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    agency: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'temp_account_agency',
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
