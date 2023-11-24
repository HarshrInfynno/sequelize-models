const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('app_user_view', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    co_info_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'app_user_info',
        key: 'id'
      }
    },
    workflow_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    column_order: {
      type: DataTypes.JSON,
      allowNull: true
    },
    hidden_columns: {
      type: DataTypes.JSON,
      allowNull: true
    },
    filters: {
      type: DataTypes.JSON,
      allowNull: true
    },
    page_size: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    search: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sort: {
      type: DataTypes.JSON,
      allowNull: true
    },
    search_field: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'app_user_views',
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
        name: "app_user_views_user_id_foreign",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
