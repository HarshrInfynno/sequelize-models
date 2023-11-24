const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('account_usage_type', {
    co_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'co_info',
        key: 'id'
      }
    },
    app_usage_type_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'app_usage_types',
        key: 'id'
      }
    }
  }, {
    tableName: 'account_usage_types',
    timestamps: false,
    indexes: [
      {
        name: "account_usage_types_co_id_foreign",
        using: "BTREE",
        fields: [
          { name: "co_id" },
        ]
      },
      {
        name: "account_usage_types_app_usage_type_id_foreign",
        using: "BTREE",
        fields: [
          { name: "app_usage_type_id" },
        ]
      },
    ]
  });
};
