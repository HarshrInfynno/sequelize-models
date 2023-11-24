const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mastertax_setting', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'co_info',
        key: 'id'
      }
    },
    client_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    client_secret: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    certificate: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    key: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    access_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    access_token_expiry: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_synced_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'mastertax_settings',
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
        name: "mastertax_Settings_co_info_foreign",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  });
};
