const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('temp_account_contact_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    account_info: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contact_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    primary_phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    secondary_phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fax_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_primary_contact: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    location: {
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
    tableName: 'temp_account_contact_info',
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
