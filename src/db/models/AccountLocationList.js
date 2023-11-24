const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('account_location_list', {
    id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
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
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    tableName: 'account_location_list',
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
        name: "unique_name_for_co_info_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
          { name: "name" },
        ]
      },
      {
        name: "account_location_list_co_info_id_foreign",
        using: "BTREE",
        fields: [
          { name: "co_info_id" },
        ]
      },
    ]
  });
};
