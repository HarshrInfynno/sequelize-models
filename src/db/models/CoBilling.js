const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('co_billing', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'co_info',
        key: 'id'
      }
    },
    notice_p: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    notice_v: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    poa_p: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    poa_v: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    ar_p: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    ar_v: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    user_p: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    user_v: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    afc_v: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    afc_p: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    ocr_v: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    ocr_p: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    reg_v: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    reg_p: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    setup_fee: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    platform_fee: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    },
    mrg_service: {
      type: DataTypes.DOUBLE(16,2),
      allowNull: true,
      defaultValue: 0.00
    }
  }, {
    tableName: 'co_billing',
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
        name: "co_billing_co_info",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  });
};
