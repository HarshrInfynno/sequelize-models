const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('data_import_log', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    s3_urls: {
      type: DataTypes.JSON,
      allowNull: true
    },
    meta: {
      type: DataTypes.JSON,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "PENDING"
    },
    account_errors: {
      type: DataTypes.JSON,
      allowNull: true
    },
    agency_errors: {
      type: DataTypes.JSON,
      allowNull: true
    },
    contact_errors: {
      type: DataTypes.JSON,
      allowNull: true
    },
    errors: {
      type: DataTypes.JSON,
      allowNull: true
    },
    result: {
      type: DataTypes.JSON,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    co_info_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    import_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'data_import_logs',
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
