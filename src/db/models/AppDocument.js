const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('app_document', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    co_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    account_info_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    workflow_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    workflow_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    filename: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    extension: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mime_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    size: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    path: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    hyperlink: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    ants_attachment_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'app_documents',
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
