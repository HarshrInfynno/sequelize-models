const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('data_import_chunk', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    data_import_logs_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'data_import_logs',
        key: 'id'
      }
    },
    s3_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('PENDING','PROCESSING','PROCESSED'),
      allowNull: true
    },
    options: {
      type: DataTypes.JSON,
      allowNull: true
    },
    result: {
      type: DataTypes.JSON,
      allowNull: true
    },
    errors: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    tableName: 'data_import_chunks',
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
        name: "data_import_chunks_data_import_logs_id",
        using: "BTREE",
        fields: [
          { name: "data_import_logs_id" },
        ]
      },
    ]
  });
};
