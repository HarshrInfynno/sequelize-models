const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('account_agency_e_service_login_credential', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    account_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    country: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    agency_info_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false
    },
    agency_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    agency_dept_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    agency_city_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    agency_local_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    parent: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    website: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pin: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    expiration_date: {
      type: DataTypes.DATE,
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
    tableName: 'account_agency_e_service_login_credentials',
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
    ]
  });
};
