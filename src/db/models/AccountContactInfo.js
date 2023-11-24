const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('account_contact_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    account_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'account_info',
        key: 'id'
      }
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    contact_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    primary_phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    alert: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    secondary_phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fax_number: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    is_primary_contact: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    profile_picture_link: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    address_1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    address_2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    country: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    state: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'app_user_info',
        key: 'id'
      }
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'app_user_info',
        key: 'id'
      }
    },
    co_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    account_id: {
      type: DataTypes.STRING(50),
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
    auto_inactivate: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    app_user_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    poa_signer: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    tableName: 'account_contact_info',
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
        name: "account_contact_info_account_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "account_info_id" },
        ]
      },
      {
        name: "account_contact_info_state_foreign",
        using: "BTREE",
        fields: [
          { name: "state" },
        ]
      },
      {
        name: "account_contact_info_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "account_contact_info_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "data_import_index",
        using: "BTREE",
        fields: [
          { name: "first_name" },
          { name: "last_name" },
          { name: "co_info_id" },
          { name: "account_id" },
        ]
      },
      {
        name: "data_import_index_internal_1",
        using: "BTREE",
        fields: [
          { name: "first_name" },
          { name: "last_name" },
          { name: "co_info_id" },
          { name: "internal_id_1" },
        ]
      },
      {
        name: "data_import_index_internal_2",
        using: "BTREE",
        fields: [
          { name: "first_name" },
          { name: "last_name" },
          { name: "co_info_id" },
          { name: "internal_id_2" },
        ]
      },
    ]
  });
};
