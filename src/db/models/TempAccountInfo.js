const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_account_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    account_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dba: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fed_id: {
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
    csr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tax_service_level: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tax_service_start_date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tax_service_end_date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    account_location: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    country: {
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
    }
  }, {
    tableName: 'temp_account_info',
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
